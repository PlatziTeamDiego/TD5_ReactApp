import React from 'react';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import role from '../assets/images/rol.png';

const Header = (props) => {
  const { member } = props;
  return (
    <header>
      <section className='about-me'>
        <div className='about-me__name'>
          <h1>{member.fullname}</h1>
          <div className='socials'>
            <a href={member.facebook} target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
            <a href={member.twitter} target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
            {/* <a href={member.facebook} target='_blank'><FontAwesomeIcon icon={faInstagram} /></a> */}
            <a href={member.linkedIn} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href={member.gitHub} target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <p className='about-me__desc'>
            {member.whoAreYou}
          </p>
          <div className='rol-badge'>
            <div className='section-title'>
              <div className='container-icon'>
                <img className='icon' src={role} alt='team-role' />
              </div>
              <div className='rol-badge__desc'>
                <h3>Team Role</h3>
                <p>{member.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
