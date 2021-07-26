import React from 'react';
import Logo from './sidebar/Logo';

const Footer = () => (
  <footer className="flex gap-x-16 gap-y-4 flex-wrap items-center">
    <div className="">
      <Logo />
    </div>
    <a
      className="hover:underline cursor-pointer"
      href="https://github.com/coingaming/moon-design"
    >
      Github
    </a>
    {/* <a className="hover:underline cursor-pointer">Medium</a> */}
    <p className="">With the help of Coingaming</p>
  </footer>
);

export default Footer;
