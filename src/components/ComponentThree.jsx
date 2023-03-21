import React, { useContext } from "react";
import { TestContext } from "../context/TestContext";

const ComponentThree = () => {
  const { dispatch } = useContext(TestContext);

  const names = ["John", "Paul", "George", "Ringo"];
  const ages = [32, 33, 34, 35];

  const changeUser = () => {
    dispatch({
      type: "SET_USER",
      payload: {
        name: names[Math.floor(Math.random() * names.length)],
        age: ages[Math.floor(Math.random() * ages.length)],
      },
    });
  };

  return (
    <>
      <button onClick={() => changeUser()}>Change User</button>
    </>
  );
};

export default ComponentThree;
