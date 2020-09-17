import React, { Component } from 'react';

import Skill from './Skill';

import profile from '../assets/images/tecnic-profile.png';
import code from '../assets/images/code.png';
import power1 from '../assets/images/Superhero-01.png';
import power2 from '../assets/images/Superhero-02.png';
import power3 from '../assets/images/Superhero-03.png';
import power4 from '../assets/images/Superhero-04.png';
import power5 from '../assets/images/Superhero-05.png';
import power6 from '../assets/images/Superhero-06.png';
import power7 from '../assets/images/Superhero-07.png';
import power8 from '../assets/images/Superhero-08.png';
import weakness1 from '../assets/images/monster-01.png';
import weakness2 from '../assets/images/monster-02.png';
import weakness3 from '../assets/images/monster-03.png';
import weakness4 from '../assets/images/monster-04.png';
import weakness5 from '../assets/images/monster-05.png';
import weakness6 from '../assets/images/monster-06.png';
import weakness7 from '../assets/images/monster-07.png';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      power: [
        power1,
        power2,
        power3,
        power4,
        power5,
        power6,
        power7,
        power8,
      ],
      weakness: [
        weakness1,
        weakness2,
        weakness3,
        weakness4,
        weakness5,
        weakness6,
        weakness7,
      ],
    };
  }

  getPower() {
    const { power } = this.state;
    return power[Math.floor(Math.random() * power.length)];
  }

  getWeakness() {
    const { weakness } = this.state;
    return weakness[Math.floor(Math.random() * weakness.length)];
  }

  render() {
    const { info } = this.props;
    return (
      <main>
        <section className='profile'>
          <div className='section-title'>
            <div className='container-icon'>
              <img className='icon' src={profile} alt='' />
            </div>
            <h2>Profile</h2>
          </div>
          <div className='profile__container'>
            <div className='profile__card card-1'>
              <h3>Experience</h3>
              <p>
                {info.Experience}
              </p>
            </div>
            <div className='profile__card card-2'>
              <h3>Objectives</h3>
              <p>
                {info.Objectives}
              </p>
            </div>
            <div className='profile__card card-3'>
              <h3>Soft Skills</h3>
              <p>
                {info.softSkills}
              </p>
            </div>
            <div className='profile__card card-4'>
              <h3>Influences</h3>
              <p>
                {info.Influences}
              </p>
            </div>
            <div className='tools'>
              <div className='profile__tools'>
                <div className='section-title'>
                  <div className='container-icon'>
                    <img className='icon' src={code} alt='tools' />
                  </div>
                  <h2>
                    Tools, languages
                    <br />
                    and frameworks
                  </h2>
                </div>
                <div>
                  <ul className='profile__skills-bars'>
                    {info.Tools.map((item) => <Skill key={item.id} percentage={item.percentage} name={item.name} />)}
                  </ul>
                </div>
              </div>

              <div className='english-level'>
                <h2>
                  <span>
                    {info.englishLevel}
                    0%
                  </span>
                  English Level
                </h2>
              </div>

            </div>
            <div className='power profile__values'>

              <img src={this.getPower()} alt='' />

              <div className='profile__values__desc'>
                <h3>My super power</h3>
                <p>
                  {info.mySuperPower}
                </p>
              </div>
            </div>
            <div className='weakness profile__values'>

              <img src={this.getWeakness()} alt='' />

              <div className='profile__values__desc'>
                <h3>My biggest weakness</h3>
                <p>
                  {info.myBiggestWeakness}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;
