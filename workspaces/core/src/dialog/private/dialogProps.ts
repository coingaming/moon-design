import { ReactElement } from "react";

type DialogProps = {
 header?: ReactElement;
 content: ReactElement;
 footer?: ReactElement;
 handleClick: () => void;
};

export default DialogProps;