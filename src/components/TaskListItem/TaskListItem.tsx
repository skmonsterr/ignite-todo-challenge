import { Check, Trash } from "phosphor-react";
import styles from "./TaskListItem.module.css";

export interface TaskListItemProps {
  isDone: boolean;
}

export function TaskListItem({ isDone }: TaskListItemProps) {
  return (
    <div className={styles.taskListItem}>
      <button
        className={
          isDone ? styles.taskListItemToggleSelected : styles.listItemToggle
        }
      >
        {isDone ? <Check size={24} /> : null}
      </button>
      <p
        className={
          isDone ? styles.taskListItemTextSelected : styles.taskListItemText
        }
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.taskListItemDeleteButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}
