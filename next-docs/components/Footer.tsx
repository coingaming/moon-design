import Logo from './sidebar/Logo';

const Footer = () => (
  <footer className="relative z-10 flex gap-x-8 gap-y-6 pt-16 pb-6 flex-wrap items-center text-moon-16 text-bulma justify-center md:justify-between">
    <div className="flex gap-x-8 gap-y-6 flex-wrap justify-center items-center">
      <Logo height={16} />
      <div className="flex gap-x-8 gap-y-4 flex-wrap justify-center items-center">
        <a
          href="https://github.com/coingaming/moon-design"
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.figma.com/community/file/1002945721703152933"
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Figma
        </a>
        <a
          href="https://moonds.medium.com/"
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Medium
        </a>
        <a
          href="https://www.linkedin.com/company/moon-io/"
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
    <p>
      With the help of <span className="font-medium">Yolo Group</span>
    </p>
  </footer>
);

export default Footer;
