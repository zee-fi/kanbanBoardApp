import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AboutPage from "./Pages/AboutPage";
import kanban from "./kanban.json";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";
function App() {
  const [taskToDisplay, setTaskToDisplay] = useState(kanban);
  const deleteTask = (taskId) => {
    const newArray = taskToDisplay.filter((task) => {
      return taskId !== task.id;
    });
    setTaskToDisplay(newArray);
  };
  const updateTaskStatus = (updatedTask) => {
    setTaskToDisplay((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const createTask = (newTask) => {
    const ids = taskToDisplay.map((task) => {
      return task.id;
    });
    const maxId = Math.max(...ids);
    const nextId = maxId + 1;
    newTask = {
      ...newTask,
      id: nextId,
    };
    const newArr = [newTask, ...taskToDisplay];
    setTaskToDisplay(newArr);
  };

  const updateTask = (updatedTask) => {
    setTaskToDisplay((prev) => [
      ...prev.filter((task) => task.id !== updatedTask.id),
      updatedTask,
    ]); //takes current state, filters updated task out, adds updated task
  };

  return (
    <>
      <Navbar />
      <div className="homeDiv">
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                callBackToDelete={deleteTask}
                taskToDisplay={taskToDisplay}
                updateTaskStatus={updateTaskStatus}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/details/:taskId"
            element={<TaskDetailsPage taskToDisplay={taskToDisplay} />}
          />
          <Route
            path="/CreateTask"
            element={<CreateTask callBackToCreate={createTask} />}
          />
          <Route
            path="/UpdateTask/:taskId"
            element={
              <UpdateTask
                callBackToUpdate={updateTask}
                taskToDisplay={taskToDisplay}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
