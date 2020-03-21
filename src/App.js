import React, { useState } from "react";
import "./App.css";
import EditableTimerList from "./components/EditableTimerList";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

const initialTimers = [
  {
    id: 0,
    title: "Mow the Law",
    project: "House Chores",
    elapsed: "45678",
    editFormOpen: false
  },
  {
    id: 1,
    title: "Clear paper jam",
    project: "Office Chores",
    elapsed: "45678",
    editFormOpen: true
  }
];

function App() {
  const [timers, setTimers] = useState(initialTimers);

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
        />
      </div>
      <ToggleableTimerForm isOpen={false} />
    </div>
  );
}

export default App;
