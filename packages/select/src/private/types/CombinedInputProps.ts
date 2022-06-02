import {TextInputProps} from "@heathmont/moon-core";
import {SelectProps} from "../../Select";

export type CombinedPropType = Partial<SelectProps<any>> & Partial<TextInputProps> & { type: string };
