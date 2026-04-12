import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ButtonBack() {
  const navigate = useNavigate();

  return (
    <Button
      style="primary"
      onClick={(e) => {
        e.preventDefault;
        navigate(-1);
      }}
    >
      Back &larr;
    </Button>
  );
}

export default ButtonBack;
