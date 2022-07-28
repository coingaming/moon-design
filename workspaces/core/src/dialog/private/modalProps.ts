import { ReactElement } from "react";

type ModalProps = {
 isOpen?: boolean;
 header?: ReactElement;
 content: ReactElement;
 footer?: ReactElement;
};

export default ModalProps;
