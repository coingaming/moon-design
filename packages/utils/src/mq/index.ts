import { em } from "polished";

export const mq = (bp: number) => `@media (min-width: ${em(bp)})`;
