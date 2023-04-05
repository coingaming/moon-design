import Logo from './sidebar/Logo';

const Footer = () => (
  <footer className="theme-moon-dark relative -mx-5 xl:mx-0 mt-32 xl:mt-0 xl:fixed xl:z-40 xl:bottom-0 xl:ltr:left-80 xl:rtl:left-0 xl:ltr:right-0 xl:rtl:right-80 flex gap-x-8 gap-y-6 py-6 px-5 xl:px-20 2xl:px-32 flex-wrap items-center text-moon-16 text-bulma bg-goku justify-center md:justify-between">
    <div className="flex gap-x-8 gap-y-6 flex-col xl:flex-row w-full max-w-screen-xl justify-between items-center">
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
        With the help of{' '}
        <a
          href="https://yolo.com/"
          className="hover:underline font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Yolo Group
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
