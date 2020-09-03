import React from 'react';

import Skill from './Skill';

import profile from '../assets/images/tecnic-profile.png';
import code from '../assets/images/code.png';
import * as imgRandom from '../imgrandom.js';

const Main = (props) => {
  return (
    <main>
      <section className='profile'>
        <div className='section-title'>
          <div className='container-icon'>
            <img className='icon' src={profile} alt='' />
          </div>
          <h2>Tecnic Profile</h2>
        </div>
        <div className='profile__container'>
          <div className='profile__card card-1'>
            <h3>Experience</h3>
            <p>
              {props.info.Experience}
            </p>
          </div>
          <div className='profile__card card-2'>
            <h3>Objectives</h3>
            <p>
              {props.info.Objectives}
            </p>
          </div>
          <div className='profile__card card-3'>
            <h3>Soft Skills</h3>
            <p>
              {props.info.softSkills}
            </p>
          </div>
          <div className='profile__card card-4'>
            <h3>Influences</h3>
            <p>
              {props.info.Influences}
            </p>
          </div>
          <div className='tools'>
            <div className='profile__tools'>
              <div className='section-title'>
                <div className="container-icon">
                <img className='icon' src={code} alt='tools' />
                </div>
                <h2>
                  Tools, languages
                  <br />
                  {' '}
                  and frameworks
                </h2>
              </div>
              <div>
                <ul className='profile__skills-bars'>
                  {props.info.Tools.map(item =>
                    <Skill key={item.id} {...item} />
                    )}
                </ul>
              </div>
            </div>
            
            <div className='english-level'>
              <h2>
                <span>{props.info.englishLevel}0%</span>
                English Level
              </h2>
            </div>

          </div>
          <div className='power profile__values'>

            <img src={imgRandom.skillAvatar()[0]} alt='' />


            <div className='profile__values__desc'>
              <h3>Mi super poder</h3>
              <p>
                {props.info.mySuperPower}
              </p>
            </div>
          </div>
          <div className='weakness profile__values'>

            <img src={imgRandom.skillAvatar()[1]} alt='' />

            <div className='profile__values__desc'>
              <h3>Mi mayor debilidad</h3>
              <p>
                {props.info.myBiggestWeakness}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
