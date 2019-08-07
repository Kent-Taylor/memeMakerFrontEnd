import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { useRoutes, A } from "hookrouter";

import MemeForm from "./components/memeForm";

const routes = {
  "/": () => <App />,
  "/form": () => <MemeForm />,
  "/form/:id": ({ id }) => <MemeForm id={id} editMode={true} />
};

import "./style/main.scss";

function Main() {
  return (
    <div className="home-container">
      <div className="navbar">
        <A href="/">Home</A>
        <A href="/form">Create</A>
      </div>
      {useRoutes(routes)}
    </div>
  );
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));
