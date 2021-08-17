function Square(props) {
  return (
    <button className="square" onClick={() => props.whenClick({ value: "X" })}>
      {props.value}
    </button>
  );
}

export default Square;
