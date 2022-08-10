import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingComp = () => {
  return (
    <div className="text-center py-4">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};

export default LoadingComp;
