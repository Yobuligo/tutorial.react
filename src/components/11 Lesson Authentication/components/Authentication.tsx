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
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

export default Authentication;
