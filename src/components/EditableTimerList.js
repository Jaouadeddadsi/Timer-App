import React from "react";
import EditableTimer from "./EditableTimer";
import PropTypes from "prop-types";

function EditableTimerList({
  timers,
  changeEditFormOpen,
  updateTimer,
  cancelUpdate,
  deleteTimer,
  updateElapsed
}) {
  return (
    <>
      {timers.map(timer => (
        <EditableTimer
          key={timer.id}
          timer={timer}
          handleEdit={changeEditFormOpen}
          updateTimer={updateTimer}
          cancelUpdate={cancelUpdate}
          deleteTimer={deleteTimer}
          updateElapsed={updateElapsed}
        />
      ))}
    </>
  );
}

EditableTimerList.propTypes = {
  timers: PropTypes.array.isRequired,
  changeEditFormOpen: PropTypes.func.isRequired,
  updateTimer: PropTypes.func.isRequired,
  cancelUpdate: PropTypes.func.isRequired,
  deleteTimer: PropTypes.func.isRequired,
  updateElapsed: PropTypes.func.isRequired
};

export default EditableTimerList;
