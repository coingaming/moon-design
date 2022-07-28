import { ReactElement } from "react";

type DialogProps = {
 isOpen?: boolean;
 header?: string | ReactElement;
 content: ReactElement;
 footer?: ReactElement;
 handleClick: (newValue?: any) => any;
};

export default DialogProps;
