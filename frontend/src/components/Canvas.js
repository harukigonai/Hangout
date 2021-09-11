import React, { useState, useEffect, useRef } from "react";
import Sketch from "react-p5";
import styles from "../styles/Hangout.module.css";

let x = 50;
let y = 50;

export default function Canvas({ width }) {
  const [p5, setP5] = useState();

  //   const [pageWidth, setPageWidth] = useState();
  const pageRef = useRef();

  useEffect(() => {
    function onResize() {
      if (p5) {
        p5.resizeCanvas(pageRef.current.offsetWidth, 500);
      }
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  const setup = (p5, canvasParentRef) => {
    setP5(p5);
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  console.log(width);

  const draw = (p5) => {
    // p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  return (
    <div ref={pageRef} id={styles.canvasDiv}>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}
