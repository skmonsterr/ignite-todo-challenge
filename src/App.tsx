import { Header } from "./components/Header/Header";
import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}></main>
    </div>
  );
}
