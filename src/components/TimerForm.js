import React, { useState } from "react";
// import PropTypes from "prop-types";
import "../styles/TimerForm.css";

function TimerForm({
  timer,
  updateTimer,
  cancelUpdate,
  createTimer,
  setIsOpen
}) {
  const [title, setTitle] = useState(timer ? timer.title : "");
  const [project, setProject] = useState(timer ? timer.project : "");
  const handleChange = (func, val) => {
    func(val);
  };
  const handleUpdate = e => {
    e.preventDefault();
    updateTimer(timer.id, title, project);
  };
  const handleCancel = () => {
    cancelUpdate(timer.id);
  };

  const handleCreate = e => {
    e.preventDefault();
    createTimer(title, project);
    setIsOpen(false);
  };
  const handleCancelCreate = () => {
    setIsOpen(false);
  };
  return (
    <form className="timer-form" onSubmit={timer ? handleUpdate : handleCreate}>
      <div className="timer-form-field">
        <label>Title</label> <br />
        <input
          onChange={e => handleChange(setTitle, e.target.value)}
          type="text"
          value={title}
        />
      </div>
      <div className="timer-form-field">
        <label>Project</label> <br />
        <input
          type="text"
          onChange={e => handleChange(setProject, e.target.value)}
          value={project}
        />
      </div>
      <div className="timer-form-field">
        <button type="submit" className="update">
          {timer ? "Update" : "Create"}
        </button>
        <button
          className="cancel"
          onClick={timer ? handleCancel : handleCancelCreate}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default TimerForm;
