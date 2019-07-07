// React
import React, { useState } from "react";

// Aphrodite
import { StyleSheet, css } from "aphrodite";

// App Function Component
export default function App() {
  const [count, setCount] = useState(0);
  const [strokeColor, setStrokeColor] = useState("white");

  return (
    <div>
      This is a Server-Side-Rendered React App.
      <br />
      CSS content is served server-side using Aphrodite.
      <br />
      <br />
      Here is a stateful button:
      <br />
      <button
        className={css(styles.red, styles.shake)}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      <br />
      <br />
      <svg x="50" height="200px" width="200px">
        <rect width="100%" height="100%" fill="lightgray" />
        <circle
          className={css(styles.colorTrans)}
          r="5px"
          cx="50%"
          cy="50%"
          stroke={strokeColor}
          onMouseOver={() => {
            setStrokeColor("red");
          }}
          onMouseLeave={() => {
            setStrokeColor("white");
          }}
        />
      </svg>
    </div>
  );
}

// Aphrodite Stylesheet
const styles = StyleSheet.create({
  colorTrans: {
    animationName: {
      "25%": {
        transform: "scale(1.1)",
        fill: "blue",
        cx: `${50 / 1.1}%`,
        cy: `${50 / 1.1}%`
      },
      "50%": {
        transform: "scale(1.2)",
        fill: "purple",
        cx: `${50 / 1.2}%`,
        cy: `${50 / 1.2}%`
      },
      "75%": {
        transform: "scale(1.1)",
        fill: "red",
        cx: `${50 / 1.1}%`,
        cy: `${50 / 1.1}%`
      }
    },
    animationDuration: "2s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear"
  },
  shake: {
    animationName: {
      "25%": {
        transform: "scale(1.1) rotate(4deg)"
      },
      "50%": {
        transform: "scale(1.1) rotate(-4deg)"
      }
    },
    animationDuration: "1s",
    animationIterationCount: "infinite"
  },
  red: {
    color: "red"
  }
});
