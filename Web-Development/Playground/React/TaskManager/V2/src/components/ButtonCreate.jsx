import Button from "./Button";

function ButtonCreate({ isDisabled, onClick }) {
  return (
    <Button type="create" onClick={onClick} disabled={isDisabled}>
      Create
    </Button>
  );
}

export default ButtonCreate;
