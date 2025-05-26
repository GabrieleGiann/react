import Color from "./Color"
const Colors = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} name={color.name} id={color.id} />
      ))}
    </ul>
  );
};

export default Colors;