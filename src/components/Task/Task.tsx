import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.taskListContent}>
      <input className={styles.taskCheckbox} type="checkbox" readOnly />
      <p>Task aqui</p>
      <button className={styles.trashIcon}>
        <Trash size={20} />
      </button>
    </div>
  );
}
