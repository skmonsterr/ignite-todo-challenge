import { PlusCircle } from "phosphor-react";
import { TaskListContent } from "../TaskListContent/TaskListContent";
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
      <TaskListContent />
    </div>
  );
}
