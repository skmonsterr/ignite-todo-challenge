import { Check, Trash } from "phosphor-react";
import styles from "./TaskListItem.module.css";

export interface TaskListItemProps {
  content: string;
  taskId: string;
  isDone: boolean;
  onDelete: (taskId: string) => void;
  onSelect: (taskId: string) => void;
}

export function TaskListItem({
  content,
  taskId,
  isDone,
  onDelete,
  onSelect,
}: TaskListItemProps) {
  function handleDeleteTask() {
    onDelete(taskId);
  }

  function handleSelectTask() {
    onSelect(taskId);
  }

  return (
    <div className={styles.taskListItem}>
      <button
        className={
          isDone ? styles.taskListItemToggleSelected : styles.taskListItemToggle
        }
        onClick={handleSelectTask}
      >
        {isDone ? <Check size={24} /> : null}
      </button>
      <p
        className={
          isDone ? styles.taskListItemTextSelected : styles.taskListItemText
        }
      >
        {content}
      </p>
      <div className={styles.taskListItemDeleteButtonShadow}>
        <button
          className={styles.taskListItemDeleteButton}
          onClick={handleDeleteTask}
        >
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}
