import React from 'react';
import PropTypes from 'prop-types';
import github from 'assets/images/github.svg';
import githubGreen from 'assets/images/github-green.svg';

const Footer = props => (
  <footer className="footer">
    <div className="logo">
      <a href="https://github.com/geekanant/linuxexplorer" rel="noopener noreferrer" target="_blank">
        {props.dark ? (
          <img src={githubGreen} alt="Github Logo" className="logo--github" />
        ) : (
          <img src={github} alt="Github Logo" className="logo--github" />
        )}
      </a>
    </div>
    <p className="footer__copyright dark-white">
      Made with <span>❤</span> by{' '}
      <a href="https://www.anantpatni.com" target="_blank" rel="noopener noreferrer">
        geekanant
      </a>
      <a
        href="https://instagram.com/geekanant"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Instagram
      </a>
    </p>
  </footer>
);

Footer.propTypes = {
  dark: PropTypes.bool
};

export { Footer };
