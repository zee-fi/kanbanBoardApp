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
  let [filteredItems] = useState(kanban); // store tasktoDisplay in new state
  const search = (query) => {
    setTaskToDisplay(
      filteredItems.filter((task) => {
        return task.title.toLowerCase().includes(query.toLowerCase()); // find tasks with Titles matching what im looking for and it in FilteredItems
      })
    );
  };
  const deleteTask = (taskId) => {
    const newArray = taskToDisplay.filter((task) => {
      return taskId !== task.id; //filter and exclude task with matching ID and store in task to display
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
    setTaskToDisplay(() => [
      updatedTask,
      ...taskToDisplay.filter((task) => task.id !== updatedTask.id),
    ]); //takes current state, filters updated task out, adds updated task
  };

  return (
    <>
      <Navbar />
      <div className="homeDiv">
        <Sidebar callBackToSerch={search} />

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
