import React, { useState } from "react";

const App: React.FC = () => {
  const [status, setStatus] = useState("off");
  const [animationRed, setAnimationRed] = useState("");
  const [animationOrange, setAnimationOrange] = useState("");
  const [animationYellow, setAnimationYellow] = useState("");
  const [animationGreen, setAnimationGreen] = useState("");
  const [animationLightBlue, setAnimationLightBlue] = useState("");
  const [animationBlue, setAnimationBlue] = useState("");
  const [animationPurple, setAnimationPurple] = useState("");
  const [interval, setInterval] = useState<number>();

  function onClickHandler(switchStatus: string): void {
    if (switchStatus === "on") {
      setAnimationRed("flash-red " + interval + "s infinite");
      setAnimationOrange("flash-orange " + interval + "s infinite ");
      setAnimationYellow("flash-yellow " + interval + "s infinite ");
      setAnimationGreen("flash-green " + interval + "s infinite ");
      setAnimationLightBlue("flash-lightblue " + interval + "s infinite ");
      setAnimationBlue("flash-blue " + interval + "s infinite ");
      setAnimationPurple("flash-purple " + interval + "s infinite ");
    } else {
      setAnimationRed("");
      setAnimationOrange("");
      setAnimationYellow("");
      setAnimationGreen("");
      setAnimationLightBlue("");
      setAnimationBlue("");
      setAnimationPurple("");
    }
    setStatus(switchStatus);
  }

  function onChangeHandler(numberOfSeconds: number): void {
    setInterval(numberOfSeconds);
    setAnimationRed("flash-red " + interval + "s infinite");
    setAnimationOrange("flash-orange " + interval + "s infinite ");
    setAnimationYellow("flash-yellow " + interval + "s infinite ");
    setAnimationGreen("flash-green " + interval + "s infinite ");
    setAnimationLightBlue("flash-lightblue " + interval + "s infinite ");
    setAnimationBlue("flash-blue " + interval + "s infinite ");
    setAnimationPurple("flash-purple " + interval + "s infinite ");
  }

  return (
    <>
      <style>
        {`@keyframes flash-red {
          0% { opacity: 1; }
          10% { opacity: 0; }
        }`}
        {`@keyframes flash-orange {
          0% { opacity: 1; }
          20% { opacity: 0; }
        }`}
        {`@keyframes flash-yellow {
          0% { opacity: 1; }
          30% { opacity: 0; }
        }`}
        {`@keyframes flash-green {
          0% { opacity: 1; }
          40% { opacity: 0; }
        }`}
        {`@keyframes flash-lightblue {
          0% { opacity: 1; }
          50% { opacity: 0; }
        }`}
        {`@keyframes flash-blue {
          0% { opacity: 1; }
          60% { opacity: 0; }
        }`}
        {`@keyframes flash-purple {
          0% { opacity: 1; }
          70% { opacity: 0; }
        }`}
      </style>

      <p>
        <li style={{ display: "inline-block", color: "red", animation: animationRed }}>●</li>
        <li style={{ display: "inline-block", color: "orange", animation: animationOrange }}>●</li>
        <li style={{ display: "inline-block", color: "yellow", animation: animationYellow }}>●</li>
        <li style={{ display: "inline-block", color: "green", animation: animationGreen }}>●</li>
        <li style={{ display: "inline-block", color: "lightblue", animation: animationLightBlue }}>●</li>
        <li style={{ display: "inline-block", color: "blue", animation: animationBlue }}>●</li>
        <li style={{ display: "inline-block", color: "purple", animation: animationPurple }}>●</li>
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
