import styles from "./Button.module.css";

function Button({ onClick, type, children, isDisabled }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
