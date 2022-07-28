import { ReactElement } from "react";

type BottomSheetProps = {
 height?: string
 isOpen?: boolean;
 header?: string | ReactElement;
 content: ReactElement;
 footer?: ReactElement;
 handleClick: (newValue?: any) => any;
};

export default BottomSheetProps;
