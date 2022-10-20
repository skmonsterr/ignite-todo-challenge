import todoLogo from "../../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo ToDo List Ignite" />
    </header>
  );
}
