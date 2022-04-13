import React from 'react';
// import styles from './styles.module.css';

export type LoaderProps = {
  // TODO Type color
  color?: string;
  // TODO use Size enum
  size?: string;
};

const Loader: React.FC<LoaderProps> = ({ color, size = 'medium' }) => (
  <div className={`moon__loader h-12 w-12 bg-piccolo block`} />
);
export default Loader;
