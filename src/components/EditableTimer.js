import React from "react";
import PropTypes from "prop-types";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

function EditableTimer({
  timer,
  handleEdit,
  updateTimer,
  cancelUpdate,
  deleteTimer,
  updateElapsed
}) {
  if (timer.editFormOpen) {
    return (
      <TimerForm
        timer={timer}
        updateTimer={updateTimer}
        cancelUpdate={cancelUpdate}
      />
    );
  } else {
    return (
      <Timer
        timer={timer}
        handleEdit={handleEdit}
        deleteTimer={deleteTimer}
        updateElapsed={updateElapsed}
      />
    );
  }
}

EditableTimer.prototype = {
  timer: PropTypes.object.isRequired,
  updateTimer: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  cancelUpdate: PropTypes.func.isRequired,
  deleteTimer: PropTypes.func.isRequired,
  updateElapsed: PropTypes.func.isRequired
};

export default EditableTimer;
