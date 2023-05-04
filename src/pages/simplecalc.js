import styles from "@/styles/simpleCalc.module.css";
import Input from "@/components/input";
import Button from "@/components/button";
import { useState } from "react";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  const FirstHandleChange = (e) => {
    setFirstValue(Number(e.target.value));
  };

  const SecondHandleChange = (e) => {
    setSecondValue(Number(e.target.value));
  };

  const onAddButtonClick = () => {
    setResult(firstValue + secondValue);
  };

  const onMinusButtonClick = () => {
    setResult(firstValue - secondValue);
  };

  const onMultiButtonClick = () => {
    setResult(firstValue * secondValue);
  };

  const onDivideButtonClick = () => {
    setResult(firstValue / secondValue);
  };

  return (
    <div className={styles.simpleCalc}>
      <h1 className={styles.calcHead}>Calculator </h1>
      <div className={styles.inputBox}>
        <Input inputChange={FirstHandleChange} />
        <Input inputChange={SecondHandleChange} />
      </div>
      <div className={styles.btnBox}>
        <Button name="+" onbtnclick={onAddButtonClick} />
        <Button name="-" onbtnclick={onMinusButtonClick} />
        <Button name="X" onbtnclick={onMultiButtonClick} />
        <Button name="/" onbtnclick={onDivideButtonClick} />
      </div>
      <div>
        <h1 className={styles.calcHead}>{result}</h1>
      </div>
    </div>
  );
};
export default Calculator;
