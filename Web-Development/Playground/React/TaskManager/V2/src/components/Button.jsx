import styles from "./Button.module.css";

function Button({ onClick, style, children }) {
  return (
    <button className={`${styles.btn} ${styles[style]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
