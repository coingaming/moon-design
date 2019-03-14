type Speed = {
  default: number;
  fast: number;
  slow: number;
};

const speed: Speed = {
  default: 0.4,
  fast: 0.2,
  slow: 0.8,
};

const animation = {
  speed,
};

export { animation };
