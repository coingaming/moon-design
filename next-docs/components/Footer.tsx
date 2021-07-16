import React from 'react';
import Logo from './sidebar/Logo';

const Footer = () => (
  <footer className="flex items-center">
    <div className="mr-36">
      <Logo />
    </div>
    <a className="mr-16 hover:underline cursor-pointer">Slack</a>
    <a className="hover:underline cursor-pointer">Medium</a>
    <p className="ml-auto">With the help of Coingaming</p>
  </footer>
);

export default Footer;
