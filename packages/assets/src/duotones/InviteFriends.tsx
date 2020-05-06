import * as React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/sportsbet-themes';
import { themed } from '@heathmont/sportsbet-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 174 174"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.1}
      d="M127.716 122.496H74.0369V41.499C74.0369 35.612 78.7929 30.856 84.6799 30.856H117.073C122.96 30.856 127.716 35.612 127.716 41.499V122.496Z"
      fill="currentColor"
    />
    <path
      d="M82.5215 115.252L82.5215 115.252L82.5171 115.247L80.3421 112.985L80.3422 112.985L80.3353 112.978L80.3342 112.977C80.3279 112.971 80.3049 112.948 80.2774 112.925C80.2455 112.899 80.1929 112.861 80.1203 112.831C79.9857 112.778 79.8534 112.782 79.7401 112.817L76.6884 113.302C76.0426 113.393 75.4325 113.163 75.0254 112.688C74.6166 112.211 74.4801 111.553 74.6851 110.938L77.1197 103.634C77.239 103.298 77.5733 103.143 77.8736 103.248C78.1876 103.358 78.3545 103.684 78.2577 104.018L75.8244 111.318L75.7987 111.395V111.432C75.7949 111.457 75.7915 111.488 75.7915 111.523C75.7915 111.605 75.8093 111.689 75.848 111.77C75.8841 111.845 75.9314 111.903 75.9742 111.946L76.3226 111.597L75.9742 111.946C76.0119 111.983 76.1241 112.095 76.2985 112.129C76.4195 112.154 76.5232 112.135 76.6066 112.101L79.6228 111.622C79.6232 111.622 79.6236 111.622 79.624 111.622C80.2146 111.532 80.8042 111.736 81.2138 112.168L81.2141 112.168L83.3891 114.459L83.389 114.459L83.3982 114.469L83.7517 114.115C83.3982 114.469 83.3983 114.469 83.3985 114.469L83.3987 114.469L83.3992 114.47L83.4003 114.471L83.4026 114.473L83.4077 114.478L83.4199 114.489C83.4288 114.497 83.4398 114.507 83.4528 114.517C83.4776 114.536 83.5154 114.563 83.5644 114.588C83.6397 114.625 83.7987 114.683 83.9839 114.633C84.1391 114.601 84.2539 114.511 84.3234 114.424C84.3754 114.359 84.4198 114.275 84.4411 114.179L87.6175 104.737C87.7366 104.4 88.0712 104.245 88.3716 104.35C88.6854 104.46 88.8523 104.786 88.7558 105.119L85.5688 114.594L85.5684 114.595C85.3672 115.198 84.8813 115.626 84.2737 115.768C84.1999 115.777 84.1406 115.786 84.0904 115.793C83.9685 115.81 83.9007 115.819 83.8097 115.819C83.3406 115.819 82.8631 115.616 82.5215 115.252ZM76.7825 111.61L76.7831 111.607C76.7819 111.613 76.7813 111.615 76.7818 111.613L76.7821 111.612L76.7825 111.61ZM75.808 111.385C75.8079 111.386 75.8077 111.386 75.8076 111.387C75.8098 111.376 75.811 111.373 75.8084 111.384C75.8083 111.384 75.8082 111.385 75.808 111.385Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M93.5813 112.997C93.5806 112.997 93.5808 112.997 93.5816 112.997L93.5813 112.997ZM93.2516 113.556L93.6989 113.332C93.2516 113.556 93.2517 113.556 93.2518 113.556L93.2519 113.556L93.2522 113.557L93.2527 113.558L93.2539 113.56L93.2564 113.565L93.2624 113.576C93.2668 113.584 93.2722 113.593 93.2785 113.604C93.2909 113.624 93.3079 113.649 93.3302 113.677C93.3718 113.729 93.4469 113.809 93.5623 113.866L93.7859 113.419L93.5623 113.866C93.6569 113.914 93.7676 113.937 93.884 113.923C93.9356 113.917 93.9806 113.904 94.0179 113.89H94.1166L94.2645 113.734L96.4395 111.443L96.4398 111.443C96.8494 111.011 97.4391 110.807 98.0297 110.897C98.0301 110.897 98.0305 110.897 98.0308 110.897L101.131 111.39L101.17 111.396H101.21C101.211 111.396 101.212 111.396 101.213 111.396C101.231 111.396 101.287 111.396 101.355 111.383C101.426 111.368 101.49 111.344 101.549 111.314L101.622 111.278L101.679 111.221C101.722 111.178 101.77 111.12 101.806 111.045C101.844 110.964 101.862 110.88 101.862 110.798C101.862 110.763 101.859 110.732 101.855 110.707V110.67L101.829 110.593L99.3932 103.285L99.3933 103.285L99.3908 103.278C99.2854 102.977 99.4421 102.641 99.78 102.523C100.08 102.418 100.415 102.573 100.534 102.909L102.969 110.213C103.173 110.828 103.037 111.486 102.628 111.963C102.212 112.448 101.574 112.689 100.982 112.579L100.982 112.579L100.969 112.577L97.8663 112.084L97.8273 112.078H97.7879C97.7872 112.078 97.7864 112.078 97.7855 112.078C97.7695 112.078 97.7118 112.078 97.6477 112.088C97.5913 112.098 97.4437 112.128 97.3183 112.253L97.3182 112.253L97.3092 112.263L95.1448 114.543C94.7647 114.895 94.2793 115.094 93.8149 115.094C93.6921 115.094 93.5623 115.074 93.3871 115.045C92.7634 114.907 92.2914 114.462 92.0845 113.868L90.0847 107.81L90.0847 107.81L90.0818 107.802C89.9764 107.501 90.1331 107.165 90.471 107.047C90.7711 106.942 91.1052 107.097 91.2247 107.433L93.2241 113.489L93.2354 113.523L93.2516 113.556ZM100.872 110.888C100.872 110.89 100.872 110.888 100.871 110.883L100.871 110.885L100.872 110.887L100.872 110.888ZM101.845 110.659C101.843 110.648 101.844 110.651 101.846 110.662C101.846 110.661 101.846 110.661 101.846 110.66C101.845 110.66 101.845 110.659 101.845 110.659Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M87.8119 105.792C86.5939 105.792 85.6079 105.067 84.7669 104.458C84.3029 104.11 83.8389 103.762 83.4619 103.646C83.0269 103.501 82.4469 103.501 81.8379 103.501C80.7939 103.501 79.6049 103.501 78.6479 102.805C77.6909 102.109 77.3139 100.978 76.9949 99.963C76.8209 99.383 76.6179 98.832 76.3859 98.484C76.1249 98.136 75.6609 97.817 75.1969 97.469C74.3269 96.86 73.3699 96.164 72.9929 95.004C72.6449 93.902 72.9929 92.771 73.3119 91.814C73.5149 91.205 73.6889 90.654 73.6889 90.19C73.6889 89.726 73.5149 89.175 73.3119 88.566C72.9929 87.58 72.6159 86.478 72.9929 85.376C73.3699 84.216 74.3269 83.52 75.1969 82.911C75.6899 82.563 76.1539 82.215 76.3859 81.896C76.6469 81.548 76.8209 80.997 76.9949 80.417C77.3139 79.431 77.6909 78.3 78.6479 77.575C79.6049 76.879 80.7939 76.879 81.8379 76.879C82.4469 76.879 83.0269 76.879 83.4619 76.734C83.8389 76.618 84.3029 76.27 84.7669 75.922C85.6079 75.284 86.5939 74.588 87.8119 74.588C89.0299 74.588 90.0159 75.313 90.8569 75.922C91.3209 76.27 91.7849 76.618 92.1619 76.734C92.5969 76.879 93.1479 76.879 93.7859 76.879C94.8299 76.879 96.0189 76.879 96.9759 77.575C97.9329 78.271 98.3099 79.402 98.6289 80.417C98.8029 80.997 99.0059 81.548 99.2379 81.896C99.4989 82.244 99.9629 82.563 100.427 82.911C101.297 83.52 102.254 84.216 102.631 85.376C102.979 86.478 102.631 87.609 102.312 88.566C102.109 89.175 101.935 89.726 101.935 90.19C101.935 90.654 102.109 91.205 102.312 91.814C102.631 92.8 103.008 93.902 102.631 95.004C102.254 96.164 101.297 96.86 100.427 97.469C99.9339 97.817 99.4699 98.165 99.2379 98.484C98.9769 98.832 98.8029 99.383 98.6289 99.963C98.3099 100.949 97.9329 102.08 96.9759 102.805C96.0189 103.501 94.8299 103.501 93.7859 103.501C93.1769 103.501 92.5969 103.501 92.1619 103.646C91.7849 103.762 91.3209 104.11 90.8569 104.458C89.9869 105.067 89.0299 105.792 87.8119 105.792ZM81.9539 101.326C82.6789 101.326 83.4039 101.326 84.0999 101.558C84.8249 101.79 85.4339 102.254 86.0429 102.689C86.6809 103.153 87.2899 103.617 87.7829 103.617C88.2759 103.617 88.8849 103.182 89.5229 102.689C90.1319 102.254 90.7409 101.79 91.4659 101.558C92.2199 101.326 93.0029 101.326 93.7569 101.326C94.5109 101.326 95.2649 101.326 95.6419 101.065C96.0189 100.775 96.2509 100.05 96.4829 99.325C96.7149 98.6 96.9469 97.846 97.4109 97.237C97.8749 96.599 98.4839 96.164 99.0929 95.729C99.7309 95.265 100.34 94.83 100.485 94.366C100.63 93.931 100.398 93.206 100.166 92.51C99.9339 91.785 99.6729 91.031 99.6729 90.219C99.6729 89.407 99.9339 88.653 100.166 87.928C100.398 87.232 100.63 86.507 100.485 86.072C100.34 85.608 99.7309 85.173 99.0929 84.709C98.4839 84.274 97.8459 83.81 97.4109 83.201C96.9469 82.563 96.7149 81.809 96.4829 81.113C96.2509 80.388 96.0189 79.663 95.6419 79.373C95.2649 79.112 94.5109 79.112 93.7569 79.112C93.0029 79.112 92.2199 79.112 91.4659 78.88C90.7409 78.648 90.1319 78.184 89.5229 77.749C88.8849 77.285 88.2759 76.821 87.7829 76.821C87.2899 76.821 86.6809 77.256 86.0429 77.749C85.4339 78.184 84.8249 78.648 84.0999 78.88C83.3459 79.112 82.5629 79.112 81.8089 79.112C81.0839 79.112 80.3009 79.112 79.9239 79.373C79.5469 79.663 79.3149 80.388 79.0829 81.113C78.8509 81.838 78.6189 82.592 78.1549 83.201C77.6909 83.839 77.0819 84.274 76.4729 84.709C75.8349 85.173 75.2259 85.608 75.0809 86.072C74.9359 86.507 75.1679 87.232 75.3999 87.928C75.6319 88.653 75.8929 89.407 75.8929 90.219C75.8929 91.031 75.6319 91.785 75.3999 92.51C75.1679 93.206 74.9359 93.931 75.0809 94.366C75.2259 94.83 75.8349 95.265 76.4729 95.729C77.0819 96.164 77.7199 96.628 78.1549 97.237C78.6189 97.875 78.8509 98.629 79.0829 99.325C79.3149 100.05 79.5469 100.775 79.9239 101.065C80.3009 101.355 81.0839 101.326 81.8089 101.326C81.8669 101.326 81.8959 101.326 81.9539 101.326Z"
      fill="currentColor"
    />
    <path
      d="M52.5477 107.329H50.8367C49.2127 107.329 47.9077 106.024 47.9077 104.4V82.447C47.9077 75.168 53.8237 69.252 61.1027 69.252H86.8257C87.4347 69.252 87.9277 69.745 87.9277 70.354C87.9277 70.963 87.4347 71.456 86.8257 71.456H61.1027C55.0417 71.456 50.0827 76.386 50.0827 82.476V104.4C50.0827 104.806 50.4307 105.154 50.8367 105.154H52.5477C53.1567 105.154 53.6497 105.647 53.6497 106.256C53.6207 106.836 53.1567 107.329 52.5477 107.329Z"
      fill="currentColor"
    />
    <path
      d="M77.7778 135.372C77.1688 135.372 76.6758 134.879 76.6758 134.27V119.828C76.6758 119.219 77.1688 118.726 77.7778 118.726C78.3868 118.726 78.8798 119.219 78.8798 119.828V134.27C78.8798 134.879 78.3868 135.372 77.7778 135.372Z"
      fill="currentColor"
    />
    <path
      d="M66.9899 66.004C61.6249 66.004 57.2458 61.625 57.2458 56.26C57.2458 50.895 61.6249 46.516 66.9899 46.516C72.3549 46.516 76.7339 50.895 76.7339 56.26C76.7339 61.625 72.3839 66.004 66.9899 66.004ZM66.9899 48.72C62.8429 48.72 59.4499 52.113 59.4499 56.26C59.4499 60.407 62.8429 63.8 66.9899 63.8C71.1369 63.8 74.5299 60.407 74.5299 56.26C74.5589 52.084 71.1659 48.72 66.9899 48.72Z"
      fill="currentColor"
    />
    <path
      d="M55.9409 135.372C55.3319 135.372 54.8389 134.879 54.8389 134.27V84.738C54.8389 84.129 55.3319 83.636 55.9409 83.636C56.5499 83.636 57.0429 84.129 57.0429 84.738V134.27C57.0429 134.879 56.5499 135.372 55.9409 135.372Z"
      fill="currentColor"
    />
    <path
      d="M66.9897 135.372C66.3807 135.372 65.8877 134.879 65.8877 134.27V106.169C65.8877 105.56 66.3807 105.067 66.9897 105.067C67.5987 105.067 68.0917 105.56 68.0917 106.169V134.27C68.0917 134.879 67.5987 135.372 66.9897 135.372Z"
      fill="currentColor"
    />
    <path
      d="M66.9897 97.005C66.3807 97.005 65.8877 96.512 65.8877 95.903V95.091C65.8877 94.482 66.3807 93.989 66.9897 93.989C67.5987 93.989 68.0917 94.482 68.0917 95.091V95.903C68.0917 96.512 67.5987 97.005 66.9897 97.005Z"
      fill="currentColor"
    />
    <path
      d="M66.9897 89.349C66.3807 89.349 65.8877 88.856 65.8877 88.247V87.435C65.8877 86.826 66.3807 86.333 66.9897 86.333C67.5987 86.333 68.0917 86.826 68.0917 87.435V88.247C68.0917 88.856 67.5987 89.349 66.9897 89.349Z"
      fill="currentColor"
    />
    <path
      d="M66.9897 81.664C66.3807 81.664 65.8877 81.171 65.8877 80.562V79.75C65.8877 79.141 66.3807 78.648 66.9897 78.648C67.5987 78.648 68.0917 79.141 68.0917 79.75V80.562C68.0917 81.171 67.5987 81.664 66.9897 81.664Z"
      fill="currentColor"
    />
    <path
      d="M124.526 106.829H122.815C122.482 106.829 122.213 106.56 122.213 106.227C122.213 105.894 122.482 105.625 122.815 105.625H124.526C125.208 105.625 125.78 105.053 125.78 104.371V82.418C125.78 76.0826 120.628 70.898 114.289 70.898H87.8117C87.4789 70.898 87.2097 70.6289 87.2097 70.296C87.2097 69.9632 87.4789 69.694 87.8117 69.694H114.26C121.263 69.694 126.955 75.3862 126.955 82.389V104.4C126.955 105.722 125.87 106.829 124.526 106.829Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M97.5847 134.872C97.2518 134.872 96.9827 134.603 96.9827 134.27V119.828C96.9827 119.495 97.2518 119.226 97.5847 119.226C97.9175 119.226 98.1867 119.495 98.1867 119.828V134.257C98.1643 134.616 97.8734 134.872 97.5847 134.872Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M108.344 65.504C103.255 65.504 99.0996 61.3489 99.0996 56.26C99.0996 51.1712 103.255 47.016 108.344 47.016C113.432 47.016 117.588 51.1712 117.588 56.26C117.588 61.3489 113.432 65.504 108.344 65.504ZM108.344 48.22C103.92 48.22 100.304 51.8369 100.304 56.26C100.304 60.6832 103.92 64.3 108.344 64.3C112.767 64.3 116.384 60.6832 116.384 56.26C116.384 51.8066 112.765 48.22 108.344 48.22Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M119.393 134.872C119.06 134.872 118.791 134.603 118.791 134.27V84.738C118.791 84.4052 119.06 84.136 119.393 84.136C119.726 84.136 119.995 84.4052 119.995 84.738V134.27C119.995 134.603 119.726 134.872 119.393 134.872Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M108.344 134.872C108.011 134.872 107.742 134.603 107.742 134.27V106.169C107.742 105.836 108.011 105.567 108.344 105.567C108.677 105.567 108.946 105.836 108.946 106.169V134.27C108.946 134.603 108.677 134.872 108.344 134.872Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M108.344 96.505C108.011 96.505 107.742 96.2359 107.742 95.903V95.091C107.742 94.7582 108.011 94.489 108.344 94.489C108.677 94.489 108.946 94.7582 108.946 95.091V95.903C108.946 96.2359 108.677 96.505 108.344 96.505Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M108.344 88.849C108.011 88.849 107.742 88.5799 107.742 88.247V87.435C107.742 87.1022 108.011 86.833 108.344 86.833C108.677 86.833 108.946 87.1021 108.946 87.435V88.247C108.946 88.5799 108.677 88.849 108.344 88.849Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M108.344 81.164C108.011 81.164 107.742 80.8949 107.742 80.562V79.75C107.742 79.4172 108.011 79.148 108.344 79.148C108.677 79.148 108.946 79.4171 108.946 79.75V80.562C108.946 80.8949 108.677 81.164 108.344 81.164Z"
      fill="white"
      stroke="white"
    />
    <path
      d="M96.4756 90.19L96.4757 90.1928C96.5031 95.0449 92.5261 98.999 87.6667 98.999C82.8098 98.999 78.8577 95.0469 78.8577 90.19C78.8577 85.3332 82.8098 81.381 87.6667 81.381C92.5235 81.381 96.4757 85.3332 96.4756 90.19ZM87.6667 82.556C83.4465 82.556 80.0327 85.9699 80.0327 90.19C80.0327 94.4101 83.4465 97.824 87.6667 97.824C91.8868 97.824 95.3007 94.4101 95.3007 90.19C95.3007 86.0002 91.8881 82.556 87.6667 82.556Z"
      fill="white"
      stroke="white"
    />
  </svg>
);

type SvgProps = {
  color?: ColorProps;
  height?: string | number;
  width?: string | number;
  fontSize?: string | number;
  verticalAlign?: string;
};
const InviteFriends = styled(Svg)<SvgProps>(
  ({ color, height, width, fontSize, verticalAlign, theme }) => ({
    ...(color && {
      color: themed('color', color)(theme),
    }),
    height,
    width,
    fontSize,
    verticalAlign,
  })
);
InviteFriends.defaultProps = {
  verticalAlign: 'middle',
};
export default InviteFriends;
