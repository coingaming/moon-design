import * as React from "react";
import styled from "@emotion/styled";

const Base = styled("div")`
  border: 1px solid blue;
`;

export interface Props {
  title: string;
  className?: string;
}

export const Demo = (props: Props) => (
  <Base className={props.className}>{props.title}</Base>
);
