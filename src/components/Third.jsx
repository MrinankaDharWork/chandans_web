import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const Third = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> Third page. </h1>
      </div>
      <div>
        <Button variant="secondary" size="lg" onClick={closeTab}>
          Close Window
        </Button>
      </div>
    </>
  );
};

const closeTab = () => {
  window.open("about:blank", "_self");
  window.close();
};
