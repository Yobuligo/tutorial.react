import { useEffect, useState } from "react";
import { Form, FormMethod, useActionData } from "react-router-dom";
import styles from "./Authentication.module.css";

export enum AuthenticationFormData {
  email = "email",
  password = "password",
}

const Authentication: React.FC<{ method: FormMethod }> = (props) => {
  const actionData = useActionData();
  const [error, setError] = useState("");
  useEffect(() => {
    if (actionData) {
      setError((actionData as Error).message);
    } else {
      setError("");
    }
  }, [actionData]);
  return (
    <>
      <Form action="" className={styles.authentication} method={props.method}>
        <div>
          <div className={styles.footer}>
            <div className={styles.element}>
              <div>
                <label htmlFor={AuthenticationFormData.email}>E-Mail</label>
              </div>
              <div>
                <input
                  type="text"
                  id={AuthenticationFormData.email}
                  name={AuthenticationFormData.email}
                />
              </div>
            </div>
            <div className={styles.element}>
              <div>
                <label htmlFor={AuthenticationFormData.password}>
                  Password
                </label>
              </div>
              <div>
                <input
                  type="password"
                  id={AuthenticationFormData.password}
                  name={AuthenticationFormData.password}
                />
              </div>
            </div>
            {error ? <div className={styles.error}>{error}</div> : ""}
          </div>
          <div className={styles.footer}>
            <button>Login</button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Authentication;
