import React, { useState } from "react";

export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const operators = ["/", "*", "+", "-", "."];

  const createDigits = () => {
    const digits = [];

    for (let i = 9; i > 0; i--) {
      digits.push(
        <button
          key={i}
          className="btnNumber"
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const updateCalc = (value) => {
    console.log("value", value);
    console.log("calc", calc);
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const clear = () => {
    setResult("");
    setCalc("");
  };

  const operatorHandler = () => {
    if (calc > 0) {
      let calculated = -calc;
      let resulted = -result;
      setCalc(calculated.toString());
      setResult(resulted.toString());
    } else {
      setCalc(Math.abs(calc).toString());
      setResult(Math.abs(result).toString());
    }
  };

  const percentage = () => {
    let number = result / 100;
    setResult(number.toString());
    setCalc(number.toString());
  };
  return (
    <div className="container center">
      <div className="main">
        <div className="result">
          <p className="digit">
            {result ? <span className="results">({result})</span> : ""}&nbsp;
            {calc || "0"}
          </p>
        </div>
        <div className="core">
          <div className="actionButtons">
            <button className="btnAction" onClick={() => updateCalc("/")}>
              /
            </button>
            <button className="btnAction" onClick={() => updateCalc("*")}>
              X
            </button>
            <button className="btnAction" onClick={() => updateCalc("-")}>
              -
            </button>
            <button className="btnAction" onClick={() => updateCalc("+")}>
              +
            </button>
            <button className="btnAction" onClick={calculate}>
              =
            </button>
          </div>
          <div className="menuButtons">
            <button className="btnManu" onClick={percentage}>
              %
            </button>
            <button className="btnManu" onClick={operatorHandler}>
              +/-
            </button>
            <button className="btnManu" onClick={clear}>
              AC
            </button>
          </div>

          <div className="numberButtons">{createDigits()}</div>

          <div className="especialButtons">
            <div className="d-flex">
              <button
                className="btnNumber btn0"
                onClick={() => updateCalc("0")}
              >
                0
              </button>
              <button className="btnNumber" onClick={() => updateCalc(".")}>
                .
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
