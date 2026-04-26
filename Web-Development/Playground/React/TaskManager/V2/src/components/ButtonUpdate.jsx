import Button from "./Button";

function ButtonUpdate({ onClick }) {
  return (
    <>
      <Button type="update" onClick={onClick}>
        Update
      </Button>
    </>
  );
}

export default ButtonUpdate;
