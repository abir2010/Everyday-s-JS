import { Button } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router";
import image from "../../images/error-msg.jpg";

const NotFound = () => {
  const history = useHistory();
  function handleHomeBtn() {
    history.push("/home");
  }
  return (
    <div>
      <img src={image} alt="" width="500px" />
      <Button onClick={handleHomeBtn}>Go to Home</Button>
    </div>
  );
};

export default NotFound;
