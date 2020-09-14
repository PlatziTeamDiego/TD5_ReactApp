import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';

class Carousel extends Component {
  constructor(props) {
    super(props);
    const { items, active } = this.props;
    this.state = {
      items,
      active,
      direction: '',
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  selected() {
    const selection = this.generateItems()[2].key;
    const { selected } = this.props;
    selected(selection);
  }

  generateItems() {
    let level;
    const itemsArray = [];
    const { active, items, direction } = this.state;
    if (direction === 'left') {
      for (let i = active + 3; i > active - 4; i--) {
        let index = i;
        if (i < 0) {
          index = items.length + i;
        } else if (i >= items.length) {
          index = i % items.length;
        }
        level = active - i;
        itemsArray.push(
          <Item key={index} fullname={items[index].fullname} photo={items[index].photo} level={level} />,
        );
      }
    } else {
      for (let i = active - 3; i < active + 4; i++) {
        let index = i;
        if (i < 0) {
          index = items.length + i;
        } else if (i >= items.length) {
          index = i % items.length;
        }
        level = active - i;
        itemsArray.push(
          <Item key={index} fullname={items[index].fullname} photo={items[index].photo} level={level} />,
        );
      }
    }
    return itemsArray;
  }

  moveLeft() {
    const { active, items } = this.state;
    let newActive = active;
    newActive--;
    this.setState({
      active: newActive < 0 ? items.length - 1 : newActive,
      direction: 'left',
    }, this.selected);
  }

  moveRight() {
    const { active, items } = this.state;
    const newActive = active;
    this.setState({
      active: (newActive + 1) % items.length,
      direction: 'right',
    }, () => this.selected());
  }

  render() {
    const { direction } = this.state;
    return (
      <nav className='slide'>
        <ReactCSSTransitionGroup
          transitionName={direction}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div className='slide__group'>
            {this.generateItems()}
          </div>
        </ReactCSSTransitionGroup>
        <div className='slide__buttons'>
          <div className='slide__buttons-single' onClick={this.leftClick} role='button' tabIndex={0}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className='slide__buttons-single' onClick={this.rightClick} role='button' tabIndex={0}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </nav>
    );
  }
}

export default Carousel;
