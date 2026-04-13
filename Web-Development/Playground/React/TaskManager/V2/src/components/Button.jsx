import styles from "./Button.module.css";

function Button({ onClick, type, btnWide, children, isDisabled }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${styles[btnWide]}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
