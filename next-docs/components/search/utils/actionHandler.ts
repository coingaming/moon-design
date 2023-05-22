import { values } from "lodash";

const actionHandler = (fn1: Function, value: string, fn2?: (value: string) => void) => {
  fn1();

  if (fn2 !== undefined)
    fn2(value);
}

export default actionHandler;
