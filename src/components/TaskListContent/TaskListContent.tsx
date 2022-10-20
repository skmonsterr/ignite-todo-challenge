import { TaskListItem } from "../TaskListItem/TaskListItem";
import { TaskListProps } from "../TasksList/TasksList";
import styles from "./TaskListContent.module.css";
import clipBoard from "../../assets/clipboard.svg";

export interface TaskListContentProps {
  tasks: TaskListProps[];
  onDelete: (taskId: string) => void;
  onSelect: (taskId: string) => void;
}

export function TaskListContent({
  tasks,
  onDelete,
  onSelect,
}: TaskListContentProps) {
  const createdTasksCount = tasks.length;
  const doneTasksCount = tasks.filter(
    (task: TaskListProps) => task.isDone === true
  ).length;

  function onDeleteTaskProps(taskId: string) {
    onDelete(taskId);
  }

  function onSelectTaskProps(taskId: string) {
    onSelect(taskId);
  }

  return (
    <div className={styles.taskListContent}>
      <header className={styles.taskListContentHeader}>
        <div className={styles.taskListCreatedTaskCounter}>
          Tarefas criadas
          <span>{createdTasksCount}</span>
        </div>
        <div className={styles.taskListDoneTaskCounter}>
          Concluídas
          <span>
            {doneTasksCount} de {createdTasksCount}
          </span>
        </div>
      </header>
      {tasks.length === 0 ? (
        <div className={styles.emptyList}>
          <img className={styles.emptyListImage} src={clipBoard} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        <main className={styles.taskListItensContainer}>
          {tasks.map(({ content, id, isDone }: TaskListProps) => (
            <TaskListItem
              key={`${id}-${content}`}
              taskId={id}
              content={content}
              onSelect={onSelectTaskProps}
              onDelete={onDeleteTaskProps}
              isDone={isDone}
            />
          ))}
        </main>
      )}
    </div>
  );
}
