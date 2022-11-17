import { Card } from "../core/Card/Card";
import ErrorText from "./ErrorText";
import styles from "./SimpleForm.module.css";
import useValidator from "./useValidator";

const isNotEmpty = (value: string): boolean => {
  return value !== "";
};
const isEmail = (value: string): boolean => {
  return value.includes("@");
};

const SimpleForm: React.FC = () => {
  const nameHook = useValidator((value) => {
    return isNotEmpty(value);
  });
  const emailHook = useValidator((value) => {
    return isEmail(value);
  });

  const isFormValid = nameHook.isValueValid && emailHook.isValueValid;

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!nameHook.isValueValid || !emailHook.isValueValid) {
      return;
    }

    nameHook.onSubmitted();
    emailHook.onSubmitted();
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
            value={nameHook.value}
            onChange={nameHook.onValueChangeHandler}
            onBlur={nameHook.onValueBlurHandler}
          />
          {nameHook.needsShowValueError() && (
            <ErrorText text="Entered name is not valid" />
          )}

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            value={emailHook.value}
            onChange={emailHook.onValueChangeHandler}
            onBlur={emailHook.onValueBlurHandler}
          />
          {emailHook.needsShowValueError() && (
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
