import { Check, Trash } from "phosphor-react";
import styles from "./TaskListItem.module.css";

export function TaskListItem() {
  return (
    <div className={styles.taskListItem}>
      <button>
        <Check size={24} />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.listItemDeleteButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}
