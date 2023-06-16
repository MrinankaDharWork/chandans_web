import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const First = () => {
  let navigate = useNavigate();
  const routeChnge = () => {
    let path = "/second";
    navigate(path);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> I am nobody! </h1>
      </div>
      <div className="d-grid gap-2 flex center">
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            routeChnge();
          }}
        >
          Next page
        </Button>
      </div>
    </>
  );
};
