import React, { useState } from "react";

const App: React.FC = () => {
  const [status, setStatus] = useState("off");
  const [animation, setAnimation] = useState("");

  function onClickHandler(value: string): void {
    if (value === "on") {
      setAnimation("flash 1.5s infinite");
    } else {
      setAnimation("");
    }
    setStatus(value);
  }

  return (
    <>
      <style>
        {`@keyframes flash {
          0%,100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }`}
      </style>

      <p>
        <li style={{ display: "inline-block", color: "red", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "orange", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "yellow", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "green", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "lightblue", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "blue", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "purple", animation: animation }}>●</li>
      </p>
      <p>
        <button onClick={() => onClickHandler("on")}>on</button>
        <button onClick={() => onClickHandler("off")}>off</button>
      </p>
      <p>明滅の間隔</p>
    </>
  );
};

export default App;
