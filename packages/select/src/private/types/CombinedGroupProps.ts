import {CombinedPropType} from "./CombinedInputProps";
import {TextInputGroupSize} from "./CombinedInputSize";
import {OrientationType} from "./OrientationType";

export interface TextInputGroupProps {
  orientation?: OrientationType;
  inputProps?: {
    input1?: CombinedPropType;
    input2?: CombinedPropType;
  };
  isRtl?: boolean;
  size?: TextInputGroupSize;
}
