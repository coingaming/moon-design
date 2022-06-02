import Logo from './sidebar/Logo';

const Footer = () => (
  <footer className="flex gap-x-8 gap-y-12 pb-8 flex-wrap items-center text-moon-16 text-bulma justify-between">
    <div className="flex gap-x-8 gap-y-12 flex-wrap items-center">
      <Logo height={16} />
      <div className="flex gap-x-8 gap-y-12 flex-wrap items-center">
        <a
          className="hover:underline cursor-pointer"
          href="https://github.com/coingaming/moon-design"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          className="hover:underline cursor-pointer"
          href="https://www.figma.com/community/file/1002945721703152933"
          target="_blank"
          rel="noreferrer"
        >
          Figma Community
        </a>
        <a
          className="hover:underline cursor-pointer"
          href="https://moonds.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
      </div>
    </div>
    <p>
      With the help of <span className="font-medium">Yolo Group</span>
    </p>
  </footer>
);

export default Footer;
