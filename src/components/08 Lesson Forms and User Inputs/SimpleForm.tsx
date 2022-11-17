import { useState } from "react";
import { Card } from "../core/Card/Card";
import ErrorText from "./ErrorText";
import styles from "./SimpleForm.module.css";

const SimpleForm: React.FC = () => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const isValid = value.trim() !== "";

  const needsShowError = (): boolean => {
    if (valueTouched) {
      if (isValid) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValueTouched(true);
    if (!isValid) {
      return;
    }

    // pretend to submit
    setValue("");
    setValueTouched(false);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setValueTouched(true);
  };

  const onBlueHandler = () => {
    setValueTouched(true);
  };

  return (
    <div className={styles.simpleForm}>
      <Card>
        <p>There are three ways to validate forms and entered values.</p>
        <ol>
          <li>When a form was submitted</li>
          <li>when an input loses focus</li>
          <li>when a user entered a value</li>
        </ol>
        <p>Validation for the following input means to not being empty.</p>
        <ol>
          <li>
            At the beginning the values of this form seems to be correct (even
            so nothing was entered)
          </li>
          <li>When pressing the submit button it becomes invalid</li>
          <li>
            when entering the input and directly leaving the input (losing
            focus), it becomes invalid{" "}
          </li>
          <li>
            when entering a value the state changed from valid to invalid.
            Depending on the input
          </li>
        </ol>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={value}
            onChange={onChangeHandler}
            onBlur={onBlueHandler}
          />
          {needsShowError() && <ErrorText text="Entered values not valid" />}
          <footer className={styles.submitButton}>
            <button type="submit">Submit</button>
          </footer>
        </form>
      </Card>
    </div>
  );
};

export default SimpleForm;
