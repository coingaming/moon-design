type PalleteColorProp = {
  name: string;
  value?: 10 | 60 | 100;
  description?: string;
};

const ColoursPalette = ({
  colors,
  title,
  description,
}: {
  colors: PalleteColorProp[];
  title: string;
  description?: string;
}) => {
  return (
    <>
      <h3 className="font-moon-16 font-medium">
        {title}
        {description && <span className="font-normal"> - {description}</span>}
      </h3>
      <div className="flex gap-4 items-start font-moon-16">
        {colors.map((color, index) => (
          <div
            className="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
            key={index}
          >
            <div
              style={{ backgroundColor: color.name }}
              className={`w-full h-40 rounded-moon-s-sm border border-beerus`}
            />
            <p>
              {color.description}
              {color.value && ' - ' + color.value}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColoursPalette;
