const QuickNav = ({ items }: { items: string[] }) => (
  <ul>
    {items.map((item) => (
      <li key={item}>
        <a href={`#${item}`}>{item}</a>
      </li>
    ))}
  </ul>
);

export default QuickNav;
