import React, { Component } from 'react';
import Normalize from 'react-normalize';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Spinner from './components/animation/Spinner';
import api from './api';

import './fontawesome';
/* flaticon */
import './assets/font/flaticon.css';
import './assets/sass/main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false,
      memberSelected: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {

    this.setState({ loading: true, error: null });

    try {
      const data = await api.members.list();
      this.setState({ data });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  setMemberSelected = (item) => {
    this.setState({ memberSelected: item },
      () => {
        const member = this.state.data[item];
        document.documentElement.style.setProperty('--color', member.color);
        document.documentElement.style.setProperty('--dark-color', member.darkColor);
        document.documentElement.style.setProperty('--light-color', member.lightColor);
      });
  }

  render() {
    const { data, memberSelected } = this.state;
    if (data) {
      return (
        <>
          <Normalize />
          <Navbar members={data} fullPage={memberSelected} itemSelected={this.setMemberSelected} />
          {memberSelected && (
            <>
              <Header member={data[memberSelected]} />
              <Main info={data[memberSelected]} />
              <Footer social={data[memberSelected]} />
            </>
          )}
        </>
      );
    }
    // return <h1>Loading</h1>;
    return <Spinner />;

  }
};

export default App;
