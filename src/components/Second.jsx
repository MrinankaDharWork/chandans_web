import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export const Second = () => {
  let navigate = useNavigate();
  const routeChnge = () => {
    let path = "/third";
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
        <h1> Second page. </h1>
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

        <Button
          variant="danger"
          size="lg"
          onClick={() => window.open("/third", "_blank2")}
        >
          Open in new window
        </Button>

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
