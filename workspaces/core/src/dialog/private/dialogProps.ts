import { ReactElement } from "react";

type DialogProps = {
 isOpen?: boolean;
 header?: ReactElement;
 content: ReactElement;
 footer?: ReactElement;
 handleClick: (newValue:boolean) => any;
};

export default DialogProps;