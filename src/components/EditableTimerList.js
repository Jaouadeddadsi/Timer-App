import React from "react";
import EditableTimer from "./EditableTimer";
import PropTypes from "prop-types";

function EditableTimerList({
  timers,
  changeEditFormOpen,
  updateTimer,
  cancelUpdate,
  deleteTimer
}) {
  return (
    <>
      {timers.map(timer => (
        <EditableTimer
          timer={timer}
          handleEdit={changeEditFormOpen}
          updateTimer={updateTimer}
          cancelUpdate={cancelUpdate}
          deleteTimer={deleteTimer}
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
  deleteTimer: PropTypes.func.isRequired
};

export default EditableTimerList;
