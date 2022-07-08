import React from "react";

const Title = ({ text, classes }: { text: string; classes?: string }) => (<p
 className={`text-[32px] text-center font-semibold p-4 lg:text-moon-48 sm:text-moon-32 ${classes ?? ''}`}
>{text}</p>);

export default Title;
