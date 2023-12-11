export const ColoredMessage = (props) => {
    const contentStyle = {
        color: props.color,
        fontSize: "20px"
      };

      <p style={contentStyle}>{props.children}</p>;
};