import { Form, FormMethod } from "react-router-dom";
import styles from "./Authentication.module.css";

const Authentication: React.FC<{ method: FormMethod }> = (props) => {
  return (
    <>
      <Form action="" className={styles.authentication} method={props.method}>
        <div>
          <div className={styles.footer}>
            <div className={styles.element}>
              <div>
                <label htmlFor="email">E-Mail</label>
              </div>
              <div>
                <input type="text" id="email" name="email" />
              </div>
            </div>
            <div className={styles.element}>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input type="password" id="password" name="password" />
              </div>
            </div>
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
