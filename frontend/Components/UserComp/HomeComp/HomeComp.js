import React from "react";
import { Container } from "react-bootstrap";
import getLocalStorageData from "../../../../backend/utils/localStorageData";

const HomeComp = () => {
  const auth_token = getLocalStorageData();
  console.log("auth_token", auth_token);
  return (
    <div>
      <Container>
        <h1 className="text-center py-5 bg-dark text-light">
          {" "}
          Welcome To UCAM
        </h1>
      </Container>
    </div>
  );
};

export default HomeComp;
