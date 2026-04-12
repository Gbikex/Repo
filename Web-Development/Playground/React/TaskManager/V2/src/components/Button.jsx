import styles from "./Button.module.css";

function Button({ onClick, type, btnWide, children }) {
  return (
    <button
      className={`${styles.btn} ${styles[type]} ${styles[btnWide]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
