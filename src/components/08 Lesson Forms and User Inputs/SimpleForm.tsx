import { useState } from "react";
import { Card } from "../core/Card/Card";
import ErrorText from "./ErrorText";
import styles from "./SimpleForm.module.css";

const SimpleForm: React.FC = () => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const isNameValid = name.trim() !== "";
  const isEmailValid = email.includes("@");
  const isFormValid = isNameValid && isEmailValid;

  const needsShowNameError = (): boolean => {
    if (nameTouched) {
      if (isNameValid) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  const needsShowEmailError = (): boolean => {
    if (emailTouched) {
      if (isEmailValid) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNameTouched(true);
    setEmailTouched(true);
    if (!isNameValid || !isEmailValid) {
      return;
    }

    // pretend to submit
    setName("");
    setNameTouched(false);
    setEmail("");
    setEmailTouched(false);
  };

  const onNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setNameTouched(true);
  };

  const onEmailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailTouched(true);
  };

  const onNameBlueHandler = () => {
    setNameTouched(true);
  };

  const onEmailBlueHandler = () => {
    setEmailTouched(true);
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
            value={name}
            onChange={onNameChangeHandler}
            onBlur={onNameBlueHandler}
          />
          {needsShowNameError() && (
            <ErrorText text="Entered name is not valid" />
          )}

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={onEmailChangeHandler}
            onBlur={onEmailBlueHandler}
          />
          {needsShowEmailError() && (
            <ErrorText text="Entered email is not valid" />
          )}

          <footer
            className={
              isFormValid ? styles.submitButton : styles.simpleFormInvalidButton
            }
          >
            <button disabled={!isFormValid} type="submit">
              Submit
            </button>
          </footer>
        </form>
      </Card>
    </div>
  );
};

export default SimpleForm;
