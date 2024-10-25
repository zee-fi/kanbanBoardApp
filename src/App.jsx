import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AboutPage from "./Pages/AboutPage";
import kanban from "./kanban.json";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import "./App.css";
import CreateTask from "./components/CreateTask";

function App() {
  const [taskToDisplay, setTaskToDisplay] = useState(kanban);
  const deleteTask = (taskId) => {
    const newArray = taskToDisplay.filter((task) => {
      return taskId !== task.id;
    });
    setTaskToDisplay(newArray);
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
  return (
    <div id="mainDev">
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
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
