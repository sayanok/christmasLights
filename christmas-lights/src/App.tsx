import React, { useState } from "react";

const App: React.FC = () => {
  const [status, setStatus] = useState("off");
  const [animation, setAnimation] = useState("");
  const [animationBackBeat, setAnimationBackBeat] = useState("");
  const [interval, setInterval] = useState<number>();

  function onClickHandler(switchStatus: string): void {
    if (switchStatus === "on") {
      setAnimation("flash " + interval + "s infinite");
      setAnimationBackBeat("flash-backbeat " + interval + "s infinite");
    } else {
      setAnimation("");
      setAnimationBackBeat("");
    }
    setStatus(switchStatus);
  }

  function onChangeHandler(numberOfSeconds: number): void {
    setInterval(numberOfSeconds);
    setAnimation("flash " + interval + "s infinite");
    setAnimationBackBeat("flash-backbeat " + interval + "s infinite");
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
        {`@keyframes flash-backbeat {
          0%,100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }`}
      </style>

      <p>
        <li style={{ display: "inline-block", color: "red", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "orange", animation: animationBackBeat }}>●</li>
        <li style={{ display: "inline-block", color: "yellow", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "green", animation: animationBackBeat }}>●</li>
        <li style={{ display: "inline-block", color: "lightblue", animation: animation }}>●</li>
        <li style={{ display: "inline-block", color: "blue", animation: animationBackBeat }}>●</li>
        <li style={{ display: "inline-block", color: "purple", animation: animation }}>●</li>
      </p>
      <p>
        <button onClick={() => onClickHandler("on")}>on</button>
        <button onClick={() => onClickHandler("off")}>off</button>
      </p>
      <form>
        <p>
          <input type={"number"} value={interval} onChange={(e) => onChangeHandler(Number(e.target.value))}></input>
          sec
        </p>
      </form>
    </>
  );
};

export default App;
