import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.03 13.899a9.178 9.178 0 007.071 7.07 4.7 4.7 0 00.027.105 1.25 1.25 0 001.207.926h1.32c.566 0 1.06-.38 1.207-.926a6.12 6.12 0 00.027-.102 9.178 9.178 0 007.08-7.073 4.7 4.7 0 00.105-.027A1.25 1.25 0 0022 12.665v-1.32c0-.566-.38-1.06-.926-1.207a6.12 6.12 0 00-.102-.027 9.178 9.178 0 00-7.083-7.083 6.35 6.35 0 00-.027-.102A1.25 1.25 0 0012.655 2h-1.32c-.565 0-1.06.38-1.207.926-.01.034-.018.069-.027.104a9.178 9.178 0 00-7.073 7.081 6.35 6.35 0 00-.102.027A1.25 1.25 0 002 11.345v1.32c0 .565.38 1.06.926 1.207.034.01.069.018.104.027zm8.386 1.851c-.258 0-.5.079-.701.215a4.177 4.177 0 01-2.68-2.68c.136-.201.215-.443.215-.7V11.42c0-.258-.08-.5-.216-.702a4.177 4.177 0 012.681-2.684c.201.137.443.215.7.215h1.164c.258 0 .5-.079.702-.216a4.177 4.177 0 012.685 2.685 1.247 1.247 0 00-.216.702v1.163c0 .258.078.5.215.7a4.177 4.177 0 01-2.684 2.682 1.247 1.247 0 00-.702-.216h-1.163zm2.627 4.331a8.347 8.347 0 006.037-6.035c-.259.025-.532.037-.818.037a12.59 12.59 0 01-2.592-.293 5.015 5.015 0 01-2.885 2.882c.008.027.014.055.02.083.185.93.278 1.765.278 2.507 0 .283-.013.556-.04.82zm-4.126-.82c0 .287.012.56.037.82a8.347 8.347 0 01-6.034-6.035c.259.025.532.037.818.037a12.59 12.59 0 002.592-.293 5.016 5.016 0 002.88 2.88 12.59 12.59 0 00-.293 2.592zM14.043 3.92c.027.263.04.536.04.82 0 .741-.093 1.576-.278 2.506a1.267 1.267 0 01-.02.083 5.016 5.016 0 012.887 2.887c.027-.008.055-.014.083-.02.93-.185 1.765-.278 2.507-.278.283 0 .556.013.82.04a8.347 8.347 0 00-6.04-6.038zM3.918 9.957A8.347 8.347 0 019.954 3.92c-.025.259-.038.532-.038.818a12.597 12.597 0 00.294 2.592 5.016 5.016 0 00-2.882 2.885 1.268 1.268 0 00-.084-.02c-.929-.185-1.764-.278-2.506-.278-.283 0-.556.013-.82.04zm3.163 1.055c-.879-.175-1.66-.262-2.344-.262-.588 0-1.12.065-1.596.192a.417.417 0 00-.309.403v1.32c0 .188.127.353.309.402.452.121.984.183 1.596.183.722 0 1.504-.086 2.345-.258a.417.417 0 00.334-.408v-1.163c0-.199-.14-.37-.335-.409zm12.18-.262c.588 0 1.12.065 1.596.192a.417.417 0 01.309.403v1.32a.417.417 0 01-.309.402c-.452.121-.984.183-1.596.183-.722 0-1.504-.086-2.345-.258a.417.417 0 01-.334-.408v-1.163c0-.199.14-.37.336-.409.878-.175 1.66-.262 2.343-.262zm-6.274-3.668c.175-.879.262-1.66.262-2.344 0-.588-.065-1.12-.192-1.596a.417.417 0 00-.403-.309h-1.32a.417.417 0 00-.402.309c-.121.452-.183.984-.183 1.596 0 .722.086 1.504.258 2.345.04.194.21.334.408.334h1.163c.199 0 .37-.14.409-.335zm.262 12.18c0 .588-.065 1.12-.192 1.596a.417.417 0 01-.403.309h-1.32a.417.417 0 01-.402-.309c-.121-.452-.183-.984-.183-1.596 0-.722.086-1.504.258-2.345a.417.417 0 01.408-.334h1.163c.199 0 .37.14.409.336.175.878.262 1.66.262 2.343z"
      fill="currentColor"
    />
    <path
      d="M10.101 20.97l.194-.048-.03-.122-.123-.026-.04.196zm-7.07-7.071l.195-.041-.026-.123-.122-.03-.048.194zm7.097 7.175l.193-.052-.193.052zm1.207.926v-.2.2zm1.32 0v.2-.2zm1.207-.926l.194.052-.194-.052zm.027-.102l-.041-.196-.123.026-.03.122.194.048zm7.08-7.073l-.047-.194-.122.03-.026.123.196.04zm.105-.027l.052.193-.052-.193zM22 12.665h-.2.2zm0-1.32h.2-.2zm-.926-1.207l.052-.194-.052.194zm-.102-.027l-.196.041.026.123.122.03.048-.194zm-7.083-7.083l-.194.048.03.122.123.026.04-.196zm-.027-.102l.194-.052-.194.052zM12.655 2v-.2.2zm-1.32 0v.2V2zm-1.207.926l-.193-.052.193.052zm-.027.104l.041.196.123-.026.03-.122-.194-.048zm-7.073 7.081l.048.194.122-.03.026-.123-.196-.04zm-.102.027l.052.193-.052-.193zM2 11.345h-.2.2zm0 1.32h.2H2zm.926 1.207l-.052.193.052-.193zm7.789 2.093l-.062.19.093.03.081-.055-.112-.165zm.7-.215v-.2.2zm-3.38-2.465l-.165-.112-.055.08.03.094.19-.062zm.215-.7h.2-.2zm0-1.164h-.2.2zm-.216-.702l-.19-.062-.03.093.055.081.165-.112zm2.681-2.684l.112-.165-.08-.055-.094.03.062.19zm.7.215v.2-.2zm1.164 0v-.2.2zm.702-.216l.062-.19-.093-.03-.081.055.112.165zm2.685 2.685l.165.112.055-.08-.03-.094-.19.062zm-.216.702h.2-.2zm0 1.163h-.2.2zm.215.7l.19.063.03-.093-.055-.081-.165.112zm-2.684 2.682l-.112.165.08.055.094-.03-.062-.19zm-.702-.216v.2-.2zm7.501-1.704l.194.05.07-.276-.283.027.02.2zm-6.037 6.035l-.2-.02-.029.284.277-.07-.048-.194zm2.707-6.272l.04-.196-.04.196zm-.08-.019l.053-.193-.175-.048-.065.17.187.071zm-2.885 2.882l-.071-.187-.17.065.048.174.193-.052zm.02.083l-.196.04.196-.04zM9.954 20.08l-.05.194.276.07-.027-.283-.2.02zM3.92 14.046l.019-.199-.283-.027.07.275.194-.049zm3.33-.237l.04.196-.04-.196zm.08-.019l.187-.072-.065-.169-.175.048.053.193zm2.88 2.88l.193.053.048-.175-.17-.065-.07.187zm-.019.08l.196.04-.196-.04zm3.851-12.831l.05-.194-.278-.07.03.284.199-.02zm-.237 3.326l-.196-.04.196.04zm-.02.083l-.193-.052-.047.174.169.065.071-.187zm2.887 2.887l-.187.071.065.17.174-.048-.052-.193zm.083-.02L16.716 10l.04.196zm3.326-.238l-.02.2.284.029-.07-.277-.194.048zM9.954 3.92l.199.019.027-.283-.275.07.049.194zM3.919 9.957l-.194-.048-.07.277.284-.03-.02-.199zM10.19 7.25l-.196.04.196-.04zm.019.08l.071.187.17-.065-.048-.175-.193.053zm-2.882 2.885l-.053.193.175.047.065-.169-.187-.071zm-.084-.02l.04-.196-.04.196zm-.162.817l.039-.196-.04.196zm-3.94-.07l-.052-.193.052.193zm-.309.403h-.2.2zm0 1.32h.2-.2zm.309.402l-.052.193.052-.193zm3.941-.075l-.04-.196.04.197zm.334-.408h.2-.2zm0-1.163h-.2.2zm13.441-.479l.052-.193-.052.193zm.309.403h.2-.2zm0 1.32h-.2.2zm-.309.402l.052.193-.052-.193zm-3.941-.075l.04-.196-.04.197zm-.334-.408h-.2.2zm0-1.163h.2-.2zm.336-.409l-.04-.196.04.196zm-3.931-3.93l.196.039-.196-.04zm.07-3.94l.193-.052-.193.052zm-.403-.309v-.2.2zm-1.32 0v.2-.2zm-.402.309l-.193-.052.193.052zm.075 3.941l-.196.04.196-.04zm.408.334v.2-.2zm1.163 0v-.2.2zm.479 13.441l.193.052-.193-.052zm-.403.309v.2-.2zm-1.32 0v-.2.2zm-.402-.309l-.193.052.193-.052zm.075-3.941l.196.04-.197-.04zm.408-.334v-.2.2zm1.163 0v.2-.2zm.409.336l.196-.04-.196.04zm-2.845 3.855a8.978 8.978 0 01-6.917-6.917l-.391.083a9.378 9.378 0 007.225 7.226l.082-.392zm.178.248a4.914 4.914 0 01-.025-.1l-.389.096.028.108.386-.104zm1.014.778a1.05 1.05 0 01-1.014-.777l-.386.103a1.45 1.45 0 001.4 1.074v-.4zm1.32 0h-1.32v.4h1.32v-.4zm1.014-.778a1.05 1.05 0 01-1.014.778v.4c.656 0 1.23-.44 1.4-1.074l-.386-.104zm.026-.098a5.698 5.698 0 01-.026.098l.386.104c.01-.035.02-.07.028-.106l-.388-.096zm7.08-7.066a8.978 8.978 0 01-6.927 6.918l.082.392a9.378 9.378 0 007.236-7.228l-.392-.082zm.248-.18a4.338 4.338 0 01-.101.026l.096.389.108-.028-.104-.386zm.777-1.013c0 .475-.319.89-.777 1.014l.103.386a1.45 1.45 0 001.074-1.4h-.4zm0-1.32v1.32h.4v-1.32h-.4zm-.778-1.014c.46.123.778.539.778 1.014h.4c0-.656-.44-1.23-1.074-1.4l-.104.386zm-.098-.026l.098.026.104-.387a5.738 5.738 0 00-.106-.027l-.096.388zm-7.076-7.081a8.978 8.978 0 016.928 6.928l.392-.082a9.378 9.378 0 00-7.238-7.238l-.082.392zm-.179-.246l.026.098.388-.096a6.859 6.859 0 00-.027-.106l-.387.104zM12.655 2.2c.475 0 .891.319 1.014.778l.387-.104a1.45 1.45 0 00-1.4-1.074v.4zm-1.32 0h1.32v-.4h-1.32v.4zm-1.014.777a1.05 1.05 0 011.014-.777v-.4c-.655 0-1.23.44-1.4 1.074l.386.103zm-.025.101l.025-.1-.386-.104-.028.108.389.096zm-7.072 7.074a8.978 8.978 0 016.918-6.926l-.082-.391a9.378 9.378 0 00-7.228 7.235l.392.082zm-.246.179l.098-.026-.096-.388a5.88 5.88 0 00-.106.027l.104.387zM2.2 11.345c0-.475.319-.891.778-1.014l-.104-.387a1.45 1.45 0 00-1.074 1.4h.4zm0 1.32v-1.32h-.4v1.32h.4zm.778 1.014a1.05 1.05 0 01-.778-1.014h-.4c0 .655.44 1.23 1.074 1.4l.104-.386zm.1.025a4.239 4.239 0 01-.1-.025l-.104.386.108.028.096-.389zm7.75 2.426c.168-.114.371-.18.588-.18v-.4c-.299 0-.58.091-.813.25l.224.33zm-2.983-2.783a4.377 4.377 0 002.808 2.808l.124-.38a3.977 3.977 0 01-2.552-2.552l-.38.123zm.205-.763c0 .216-.066.42-.18.589l.33.224c.159-.233.25-.514.25-.813h-.4zm0-1.163v1.163h.4v-1.163h-.4zm-.181-.59c.115.17.18.373.18.59h.4c0-.3-.09-.58-.25-.815l-.33.225zm2.784-2.986a4.377 4.377 0 00-2.81 2.812l.381.123a3.977 3.977 0 012.553-2.555l-.124-.38zm.763.205c-.217 0-.42-.066-.589-.18l-.224.33c.233.159.514.25.813.25v-.4zm1.163 0h-1.163v.4h1.163v-.4zm.59-.181c-.17.115-.373.181-.59.181v.4c.3 0 .58-.092.815-.25l-.225-.331zm2.987 2.788a4.377 4.377 0 00-2.813-2.813l-.123.38a3.977 3.977 0 012.555 2.556l.381-.123zm-.206.764c0-.217.066-.42.181-.59l-.33-.225c-.16.234-.251.516-.251.815h.4zm0 1.163v-1.163h-.4v1.163h.4zm.18.589a1.047 1.047 0 01-.18-.589h-.4c0 .299.091.58.25.813l.33-.224zm-2.787 2.983a4.378 4.378 0 002.812-2.81l-.38-.123a3.977 3.977 0 01-2.555 2.553l.123.38zm-.764-.206c.217 0 .42.066.59.181l.225-.33a1.447 1.447 0 00-.815-.251v.4zm-1.163 0h1.163v-.4h-1.163v.4zm8.47-1.953a8.147 8.147 0 01-5.892 5.89l.097.388a8.547 8.547 0 006.183-6.18l-.388-.098zm-.624.286c.292 0 .571-.012.837-.038l-.038-.398a8.409 8.409 0 01-.8.036v.4zm-2.552-.278c.905.185 1.756.278 2.552.278v-.4c-.765 0-1.589-.09-2.472-.27l-.08.392zm-.093-.022c.03.008.062.016.093.022l.08-.392a1.057 1.057 0 01-.067-.016l-.106.386zm-2.76 2.876a5.215 5.215 0 003-2.997l-.374-.144a4.815 4.815 0 01-2.77 2.767l.144.374zm.144-.143a1.465 1.465 0 00-.023-.097l-.386.105.017.07.392-.078zm.282 2.546c0-.759-.095-1.607-.282-2.546l-.392.078c.183.92.274 1.742.274 2.468h.4zm-.041.84c.027-.27.041-.55.041-.84h-.4c0 .277-.013.543-.04.799l.399.04zm-4.089-.04a8.377 8.377 0 01-.036-.8h-.4c0 .292.012.571.038.837l.398-.038zm-6.427-5.967a8.547 8.547 0 006.179 6.18l.098-.389a8.148 8.148 0 01-5.89-5.889l-.387.098zm1.012-.212a8.41 8.41 0 01-.8-.036l-.037.398c.266.026.545.038.837.038v-.4zm2.472-.27c-.883.18-1.707.27-2.472.27v.4c.796 0 1.647-.093 2.552-.278l-.08-.392zm.067-.016a1.051 1.051 0 01-.067.016l.08.392c.031-.006.062-.014.093-.022l-.106-.386zm3.005 2.886a4.815 4.815 0 01-2.765-2.765l-.374.144a5.215 5.215 0 002.996 2.995l.143-.374zm.105.307l.016-.067-.386-.106-.022.093.392.08zm-.27 2.472c0-.765.09-1.589.27-2.472l-.392-.08a12.79 12.79 0 00-.278 2.552h.4zm4.166-14.524c0-.29-.014-.57-.041-.84l-.398.041c.026.256.04.522.04.8h.4zm-.282 2.546c.187-.939.282-1.787.282-2.546h-.4c0 .726-.09 1.548-.274 2.467l.392.079zm-.023.096c.009-.031.016-.064.023-.096l-.392-.079c-.005.024-.01.048-.017.07l.386.105zm2.88 2.763a5.216 5.216 0 00-3.002-3.002l-.142.374a4.816 4.816 0 012.771 2.771l.374-.143zM16.717 10a1.384 1.384 0 00-.097.023l.105.386.07-.017-.078-.392zm2.546-.282c-.759 0-1.607.095-2.546.282l.078.392c.92-.183 1.742-.274 2.468-.274v-.4zm.84.041a8.17 8.17 0 00-.84-.041v.4c.277 0 .543.013.799.04l.04-.399zm-6.108-5.645a8.147 8.147 0 015.893 5.893l.388-.097a8.547 8.547 0 00-6.184-6.184l-.097.388zm-4.09-.387a8.547 8.547 0 00-6.18 6.183l.388.097a8.147 8.147 0 015.89-5.892l-.097-.388zm.212 1.012c0-.28.013-.547.037-.8l-.399-.037a8.782 8.782 0 00-.038.837h.4zm.27 2.472c-.18-.883-.27-1.707-.27-2.472h-.4c0 .796.094 1.647.279 2.552l.392-.08zm.017.067a1.051 1.051 0 01-.016-.067l-.392.08c.006.031.014.062.022.093l.386-.106zm-2.888 3.01a4.816 4.816 0 012.766-2.77l-.143-.374a5.216 5.216 0 00-2.997 3l.374.143zm-.31.104c.024.005.047.01.07.017l.105-.386a1.498 1.498 0 00-.097-.023l-.078.392zm-2.467-.274c.726 0 1.547.09 2.467.274L7.283 10c-.938-.187-1.787-.282-2.545-.282v.4zm-.799.04a7.78 7.78 0 01.799-.04v-.4c-.29 0-.57.014-.84.042l.041.397zm.8.793c.666 0 1.434.085 2.303.259l.079-.393c-.888-.177-1.683-.266-2.383-.266v.4zm-1.545.186c.456-.123.97-.186 1.544-.186v-.4c-.602 0-1.152.066-1.648.2l.104.386zm-.16.209c0-.098.065-.184.16-.21l-.104-.386a.617.617 0 00-.457.596h.4zm0 1.32v-1.32h-.4v1.32h.4zm.16.209a.217.217 0 01-.16-.21h-.4c0 .28.187.524.456.596l.104-.386zm1.544.176c-.6 0-1.114-.06-1.544-.176l-.104.386c.473.127 1.023.19 1.648.19v-.4zm2.305-.254c-.83.17-1.599.254-2.305.254v.4c.738 0 1.533-.087 2.385-.262l-.08-.392zm.174-.212a.217.217 0 01-.174.213l.08.391a.617.617 0 00.494-.604h-.4zm0-1.163v1.163h.4v-1.163h-.4zm-.175-.212c.102.02.175.109.175.212h.4a.617.617 0 00-.496-.605l-.079.393zm13.868-.46a6.35 6.35 0 00-1.648-.199v.4c.573 0 1.087.063 1.544.186l.104-.387zm.457.596a.617.617 0 00-.457-.596l-.104.387c.095.025.16.11.16.209h.4zm0 1.32v-1.32h-.4v1.32h.4zm-.457.595a.617.617 0 00.457-.595h-.4a.217.217 0 01-.16.209l.103.386zm-1.648.19c.625 0 1.175-.063 1.648-.19l-.104-.386c-.43.116-.945.176-1.544.176v.4zm-2.385-.262a11.96 11.96 0 002.385.262v-.4c-.706 0-1.474-.084-2.305-.254l-.08.392zm-.494-.604c0 .293.207.546.494.604l.08-.392a.217.217 0 01-.174-.212h-.4zm0-1.163v1.163h.4v-1.163h-.4zm.496-.605a.617.617 0 00-.496.605h.4c0-.103.073-.192.175-.212l-.079-.393zm2.383-.266c-.7 0-1.495.09-2.383.266l.079.393c.869-.174 1.637-.259 2.304-.259v-.4zM13.05 4.738c0 .667-.085 1.435-.259 2.304l.393.079c.177-.888.266-1.683.266-2.383h-.4zm-.186-1.544c.123.456.186.97.186 1.544h.4c0-.602-.066-1.152-.2-1.648l-.386.104zm-.209-.16c.098 0 .184.065.21.16l.386-.104a.617.617 0 00-.596-.457v.4zm-1.32 0h1.32v-.4h-1.32v.4zm-.209.16a.217.217 0 01.21-.16v-.4a.617.617 0 00-.596.456l.386.104zm-.176 1.544c0-.6.06-1.114.176-1.544l-.386-.104c-.127.473-.19 1.023-.19 1.648h.4zm.254 2.305c-.17-.83-.254-1.599-.254-2.305h-.4c0 .738.087 1.533.262 2.385l.392-.08zm.212.174a.217.217 0 01-.213-.174l-.391.08a.617.617 0 00.604.494v-.4zm1.163 0h-1.163v.4h1.163v-.4zm.212-.175a.217.217 0 01-.212.175v.4a.617.617 0 00.605-.496l-.393-.079zm.46 13.868a6.35 6.35 0 00.199-1.648h-.4c0 .573-.063 1.087-.186 1.544l.387.104zm-.596.457a.617.617 0 00.596-.457l-.387-.104a.217.217 0 01-.209.16v.4zm-1.32 0h1.32v-.4h-1.32v.4zm-.595-.457c.072.27.316.457.595.457v-.4a.217.217 0 01-.209-.16l-.386.103zm-.19-1.648c0 .625.063 1.175.19 1.648l.386-.104c-.116-.43-.176-.945-.176-1.544h-.4zm.262-2.385a11.96 11.96 0 00-.262 2.385h.4c0-.706.084-1.474.254-2.305l-.392-.08zm.604-.494a.617.617 0 00-.604.494l.392.08c.02-.101.109-.174.212-.174v-.4zm1.163 0h-1.163v.4h1.163v-.4zm.605.496a.617.617 0 00-.605-.496v.4c.103 0 .192.073.212.175l.393-.079zm.266 2.383c0-.7-.09-1.495-.266-2.383l-.393.079c.174.869.259 1.637.259 2.304h.4z"
      fill="currentColor"
    />
  </svg>
);

type IconProps = {
  backgroundColor?: ColorProps,
  circleColor?: ColorProps,
  color?: ColorProps,
};
const IconSupport =
  styled(Svg) <
  IconProps >
  (({ backgroundColor, circleColor, color, theme }) => [
    backgroundColor && {
      backgroundColor: themed('color', backgroundColor)(theme),
      padding: backgroundColor ? '0.25em' : 0,
      overflow: 'visible',
      borderRadius: '50%',
    },
    color && {
      color: themed('color', color)(theme),
    },
    circleColor && {
      circle: {
        fill: themed('color', circleColor)(theme),
      },
    },
  ]);
export default IconSupport;
