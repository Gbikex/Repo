import Button from "./Button";

function ButtonReset({ onClick }) {
  return (
    <Button type="reset" onClick={onClick}>
      Reset
    </Button>
  );
}

export default ButtonReset;
