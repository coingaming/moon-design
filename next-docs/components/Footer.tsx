import React from 'react';
import Logo from './sidebar/Logo';

const Footer = () => (
  <footer className="flex gap-x-16 gap-y-4 flex-wrap items-center">
    <Logo height={16} />
    <a
      className="hover:underline cursor-pointer"
      href="https://github.com/coingaming/moon-design"
    >
      Github
    </a>
    <a
      className="hover:underline cursor-pointer"
      href="https://www.figma.com/community/file/1002945721703152933"
    >
      Figma Community
    </a>
    <a
      className="hover:underline cursor-pointer"
      href="https://moonds.medium.com/"
    >
      Medium
    </a>
    {/* <a className="hover:underline cursor-pointer">Medium</a> */}
    <p className="">With the help of Yolo Group</p>
  </footer>
);

export default Footer;
