import styles from "./TaskListContent.module.css";

export function TaskListContent() {
  return (
    <div className={styles.taskListContent}>
      <header className={styles.taskListContentHeader}>
        <div className={styles.taskListCreatedTaskCounter}>
          Tarefas criadas
          <span>5</span>
        </div>
        <div className={styles.taskListDoneTaskCounter}>
          Concluídas
          <span>2 de 5</span>
        </div>
      </header>
      <main className={styles.taskListItensContainer}>Lista</main>
    </div>
  );
}
