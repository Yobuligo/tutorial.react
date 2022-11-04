import styles from "./LoadingText.module.css";

const LoadingText: React.FC = () => {
  return (
    <div className={styles.loadingText}>
      <p>... Loading</p>
    </div>
  );
};

export default LoadingText;
