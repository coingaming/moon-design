import { ReactElement } from "react";

type DialogProps = {
 height?: string;
 width?: string;
 isOpen?: boolean;
 header?: string | ReactElement;
 content: ReactElement;
 footer?: ReactElement;
 handleClick: (newValue?: any) => any;
};

export default DialogProps;
