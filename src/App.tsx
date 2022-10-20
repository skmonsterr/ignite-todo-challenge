import { Header } from "./components/Header/Header";
import styles from "./App.module.css";
import { TasksList } from "./components/TasksList/TasksList";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>
        <TasksList />
      </main>
    </div>
  );
}
