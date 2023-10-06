import Case from "../types/Case";

const getTextCase = (textCase?: Case) => {
  return (
    textCase && {
      normal: '[&>div>span>div]:normal-case',
      lower: '[&>div>span>div]:lowercase',
      capitalize: '[&>div>span>div]:capitalize',
    }[textCase] || ''
  );
};

export default getTextCase;
