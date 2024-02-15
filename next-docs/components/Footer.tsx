import Version from './sidebar/Version';

const Footer = () => (
  <footer className="theme-moon-dark relative lg:fixed -mx-5 lg:mx-0 mt-16 lg:mt-0 lg:z-40 lg:bottom-0 inset-x-0 flex lg:flex-row gap-x-8 gap-y-6 2xl:ps-80 flex-wrap items-center text-moon-14 text-bulma bg-goku justify-center md:justify-between">
    <div className="w-full py-5 px-5 lg:ps-8 lg:pe-5 xl:pe-20 2xl:px-32">
      <div className="flex 2xl:max-w-screen-xl gap-x-4 gap-y-6 flex-col lg:flex-row w-full justify-between items-center">
        <Version />
        <div className="flex gap-x-4 gap-y-6 flex-wrap justify-center items-center text-trunks">
          <a
            href="https://github.com/coingaming/moon-design"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <span>•</span>
          <a
            href="https://www.figma.com/community/file/1002945721703152933"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>
          <span>•</span>
          <a
            href="https://moonds.medium.com/"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/company/moon-io/"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
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
          </a>{' '}
          ❤️
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
