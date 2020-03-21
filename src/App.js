import React, { useState } from "react";
import "./App.css";
import EditableTimerList from "./components/EditableTimerList";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

function App() {
  const [timers, setTimers] = useState([
    {
      id: 0,
      title: "Initial Timer",
      project: "Learing React",
      elapsed: 0,
      editFormOpen: false
    }
  ]);

  const createTimer = (title, project) => {
    setTimers([
      ...timers,
      { id: timers.length, title, project, elapsed: 0, editFormOpen: false }
    ]);
  };

  const changeEditFormOpen = id => {
    setTimers(
      timers.map(timer => {
        if (timer.id === id) {
          return { ...timer, editFormOpen: !timer.editFormOpen };
        }
        return timer;
      })
    );
  };

  const updateTimer = (id, title, project) => {
    setTimers(
      timers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            title,
            project,
            editFormOpen: !timer.editFormOpen
          };
        }
        return timer;
      })
    );
  };

  const cancelUpdate = id => {
    setTimers(
      timers.map(timer => {
        if (timer.id === id) {
          return { ...timer, editFormOpen: !timer.editFormOpen };
        }
        return timer;
      })
    );
  };

  const deleteTimer = id => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  const updateElapsed = id => {
    setTimers(
      timers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            elapsed: timer.elapsed + 1
          };
        }
        return timer;
      })
    );
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Timers</h1>
      </div>
      <div className="content">
        <EditableTimerList
          timers={timers}
          changeEditFormOpen={changeEditFormOpen}
          updateTimer={updateTimer}
          cancelUpdate={cancelUpdate}
          deleteTimer={deleteTimer}
          updateElapsed={updateElapsed}
        />
      </div>
      <ToggleableTimerForm createTimer={createTimer} />
    </div>
  );
}

export default App;
