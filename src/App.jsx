import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "./assets/apiURL";
import AboutPage from "./Pages/AboutPage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import TaskDetailsPage from "./Pages/TaskDetailsPage";
import CreateTask from "./components/CreateTask";
import UpdateTask from "./components/UpdateTask";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const [taskToDisplay, setTaskToDisplay] = useState([]);
  let [filteredItems, setFilteredItems] = useState([]); // store tasktoDisplay in new state

  useEffect(() => {
    getKanban(); //get kanban list onetime
  }, []);

  const getKanban = () => {
    axios
      .get(`${API_URL}/kanban.json`)
      .then((response) => {
        const array = Object.keys(response.data).map((id) => ({
          //convert the response from objects to an array
          id,
          ...response.data[id],
        }));
        array.toReversed(); ///////////////////////////////////////////not working, why?
        setTaskToDisplay(array);
        setFilteredItems(array);
      })
      .catch((e) => console.log("Error getting kanban list from api~", e));
  };
  const search = (query) => {
    setTaskToDisplay(
      filteredItems.filter((task) => {
        return task.title.toLowerCase().includes(query.toLowerCase()); // find tasks with Titles matching what im looking for and it in FilteredItems
      })
    );
  };
  const deleteTask = (taskId) => {
    //const newArray = taskToDisplay.filter((task) => {
    // return taskId !== task.id; //filter and exclude task with matching ID and store in task to display
    //});
    //setTaskToDisplay(newArray);
    axios
      .delete(`${API_URL}/kanban/${taskId}.json`)
      .then((response) => {
        console.log("Deleted Task");
        getKanban();
      })
      .catch((e) => console.log("Error Deleting Task", e));
  };
  const updateTaskStatus = (updatedTask) => {
    setTaskToDisplay((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const createTask = (newTask) => {
    //const ids = taskToDisplay.map((task) => {
    // return task.id;
    //});
    //const maxId = Math.max(...ids);
    //const nextId = maxId + 1;
    // newTask = {
    //  ...newTask,
    // id: nextId,
    // };
    axios
      .post(`${API_URL}/kanban.json`, newTask)
      .then((response) => {
        console.log("success", response);
        getKanban();
      })
      .catch((e) => {
        console.log("Error creating new Task", e);
      });
    //const newArr = [newTask, ...taskToDisplay];
    //setTaskToDisplay(newArr);
  };

  const updateTask = (updatedTask) => {
    console.log(updatedTask);
    //setTaskToDisplay(() => [
    //  updatedTask,
    // ...taskToDisplay.filter((task) => task.id !== updatedTask.id),
    // ]); //takes current state, filters updated task out, adds updated task
    axios
      .put(`${API_URL}/kanban/${updatedTask.id}.json`, updatedTask)
      .then((response) => {
        console.log("Updated Task");
        getKanban();
      })
      .catch((e) => console.log("Error,Couldnt Update", e));
  };

  return (
    <div className="appjsx">
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
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
