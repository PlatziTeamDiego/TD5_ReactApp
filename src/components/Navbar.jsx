import React from 'react';
import Carousel from './Carousel';

const Navbar = ({ members, itemSelected, fullPage }) => <Carousel items={members} fullPage={fullPage} active={0} selected={(index) => itemSelected(index)} />;

export default Navbar;
