import styles from "./Authentication.module.css";

const Authentication: React.FC = () => {
  return (
    <>
      <form
        action=""
        className={styles.authentication}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <div className={styles.footer}>
            <div className={styles.element}>
              <div>
                <label htmlFor="email">E-Mail</label>
              </div>
              <div>
                <input type="text" id="email" />
              </div>
            </div>
            <div className={styles.element}>
              <div>
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input type="password" id="password" />
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <button>Login</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Authentication;
