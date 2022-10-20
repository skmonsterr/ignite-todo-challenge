import { PlusCircle } from "phosphor-react";
import styles from "./TasksList.module.css";

export function TasksList() {
  return (
    <div className={styles.taskList}>
      <header className={styles.taskListHeader}>
        <form>
          <input
            className={styles.taskListInputNewTask}
            placeholder="Adicione uma nova tarefa"
            type="text"
            required
          />
          <button type="submit" className={styles.taskListButtonNewTask}>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </header>
      <div>
        <p>Tarefa aqui!</p>
      </div>
    </div>
  );
}
