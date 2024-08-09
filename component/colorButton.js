"use client";

import react, { useState } from "react";
import { Button } from "antd";

const App = (props) => {
  const { count, setCount} = props;
  const [color, setColor] = useState("blue");

  const onClickColor = () => {
    if (color === "blue") {
      setColor("red")
    } else {
      setColor("blue");
    }
    setCount(count+1);
  };

  const onClickReset = () => {
    setCount(0);
  };

  return (
    <>
      <Button
        type="primary"
        style={{backgroundColor: color, marginRight: "8px"}}
        onClick={()=>onClickColor()}
      >
        Click to change color
      </Button>

      <Button
        type="primary"
        style={{backgroundColor: "yellow", color:"Black"}}
        onClick={()=>onClickReset()}
      >
        Reset
      </Button>
    </>
      
    );
};
export default App;