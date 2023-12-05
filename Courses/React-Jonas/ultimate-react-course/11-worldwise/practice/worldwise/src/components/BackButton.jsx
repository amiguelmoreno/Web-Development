import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button type="back" onClick={() => navigate("..")}>
      &larr; Back
    </Button>
  );
}

export default BackButton;
