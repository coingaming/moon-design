type Props = {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    className?: string;
  };
};

export default Props;
