import React, { useState } from "react";
import Title from "../Components/Title";
import Task from "../Components/Task";
import { TableStyle } from "./TableStyle";
import NewTask from "./NewTask";
export default function TaskTrackerApp() {
  const [newTask, setNewTask] = useState({
    date: "",
    type: "",
    completed: ""
  });

  const handleChangeDate = (e) => {
    setNewTask({ ...newTask, date: e.target.value });
  };

  const handleChangeType = (e) => {
    setNewTask({ ...newTask, type: e.target.value });
  };

  let tasks = [
    {
      date: "",
      type: ""
    }
  ];

  const [taskList, setTaskList] = useState(tasks);

  const addNewTask = () => {
    setTaskList([...taskList, { date: newTask.date, type: newTask.type }]);
  };

  const handleCompleted = (e) => {
    e.target.classList.toggle("completed");
  };

  const handleDelete = (e) => {
    window.confirm("Do you really want to delete this task?") &&
      e.target.parentElement.remove();
  };

  return (
    <div className="container">
      <Title text={"Simple Task Tracker"} classes={"text-center fs-1"} />
      <TableStyle>
        <ul className="table-head list-unstyled">
          <li>Date</li>
          <li>Task</li>
        </ul>

        <Task
          date={newTask.date}
          setDate={handleChangeDate}
          type={newTask.type}
          setType={handleChangeType}
          onClick={addNewTask}
        />

        <ul className="table-row list-unstyled">
          {taskList.map((task, index) => {
            return task.date !== "" && task.type !== "" ? (
              <NewTask
                key={index}
                date={task.date}
                type={task.type}
                onTaskClick={handleCompleted}
                onDelete={handleDelete}
              />
            ) : null;
          })}
        </ul>
      </TableStyle>
    </div>
  );
}
