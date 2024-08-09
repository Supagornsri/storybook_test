"use client";

import react, { useState } from "react";
import Image from "next/image";
import ColorButton from "../../component/colorButton"

export default function Home() {

  const [count, setCount] = useState(0);

  return (
    <>
      <ColorButton
        setCount={setCount}
        count={count}
      />
      <div style={{color: "white"}}>
          {count}
      </div>
    </>
  );
}
