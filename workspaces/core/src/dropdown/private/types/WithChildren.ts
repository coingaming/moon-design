type WithChildren<T = {}> = T & { children?: React.ReactElement | React.ReactElement[] };

export default WithChildren