import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/TimerForm.css";

function TimerForm({ timer, updateTimer, cancelUpdate }) {
  const [title, setTitle] = useState(timer.title);
  const [project, setProject] = useState(timer.project);
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
  return (
    <form className="timer-form" onSubmit={handleUpdate}>
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
          Update
        </button>
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

TimerForm.propTypes = {
  title: PropTypes.string,
  project: PropTypes.string
};

export default TimerForm;
