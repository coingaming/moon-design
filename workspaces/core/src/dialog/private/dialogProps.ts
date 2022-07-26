import { ReactElement } from "react";

type DialogProps = {
 isOpen?: boolean;
 header?: ReactElement;
 content: ReactElement;
 footer?: ReactElement;
 handleClick: () => void;
};

export default DialogProps;