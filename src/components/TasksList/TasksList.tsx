import { PlusCircle } from "phosphor-react";
import { TaskListContent } from "../TaskListContent/TaskListContent";
import styles from "./TasksList.module.css";
import { v4 as uuidv4 } from "uuid";
import { FormEvent, useState } from "react";

export interface TaskListProps {
  content: string;
  id: string;
  isDone: boolean;
}

const tasksRaw: TaskListProps[] = [
  {
    content: "Estudar ReactJS",
    id: uuidv4(),
    isDone: false,
  },
  {
    content: "Estudar NodeJS",
    id: uuidv4(),
    isDone: true,
  },
];

export function TasksList() {
  const [tasks, setTasks] = useState<TaskListProps[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");

  function sortByIsDone(newTasksArray: TaskListProps[]) {
    const newTasksArraySorted = newTasksArray.sort((a, _b) => {
      if (a.isDone === false) return -1;
      if (a.isDone === true) return 1;
      return 0;
    });
    return newTasksArraySorted;
  }

  function handleNewCommentInvalid(event: any) {
    event.target.setCustomValidity(
      "Preencha o campo e adicione uma nova tarefa!"
    );
  }

  function handleTypeNewTaskText(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      content: newTaskText,
      id: uuidv4(),
      isDone: false,
    };
    const newTasksArray = [...tasks, newTask];

    setTasks(sortByIsDone(newTasksArray));
    setNewTaskText("");
  }

  function deleteTask(taskId: string) {
    const newTasksArray = tasks.filter(
      (task: TaskListProps) => task.id !== taskId
    );

    setTasks(newTasksArray);
  }

  function selectTask(taskId: string) {
    const newTasksArray = tasks.map((task: TaskListProps) => {
      if (task.id === taskId) task.isDone = !task.isDone;
      return task;
    });
    setTasks(sortByIsDone(newTasksArray));
  }

  return (
    <div className={styles.taskList}>
      <header className={styles.taskListHeader}>
        <form onSubmit={handleCreateNewTask}>
          <input
            className={styles.taskListInputNewTask}
            placeholder="Adicione uma nova tarefa"
            type="text"
            id="newTask"
            value={newTaskText}
            onInvalid={handleNewCommentInvalid}
            onChange={(e) => handleTypeNewTaskText(e)}
            required
          />
          <button type="submit" className={styles.taskListButtonNewTask}>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </header>
      <TaskListContent
        onDelete={deleteTask}
        onSelect={selectTask}
        tasks={tasks}
      />
    </div>
  );
}
