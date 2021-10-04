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
      <div className="flex justify-center m-24">
        <img src={image} alt="" width="500px" />
      </div>
      <div className="mb-96">
        <button
          onClick={handleHomeBtn}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
