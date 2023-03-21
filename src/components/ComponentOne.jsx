import React, { useContext } from "react";
import ComponentTwo from "./ComponentTwo";
import { TestContext } from "../context/context/TestContext";

const ComponentOne = () => {
  const { user } = useContext(TestContext);

  return (
    <>
      <h1>{user ? user.name : "No User"}</h1>
      <h2>{user ? user.age : ""}</h2>
      <ComponentTwo />
    </>
  );
};

export default ComponentOne;
