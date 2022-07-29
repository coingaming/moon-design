import { ReactElement } from "react";

type ModalProps = {
 isOpen?: boolean;
 placement?: 'top' | 'right' | 'bottom' | 'left';
 header?: ReactElement;
 content: ReactElement;
 footer?: ReactElement;
 width?: string;
 height?: string;
 handleClick: (newValue?: any) => any;
};

export default ModalProps;
