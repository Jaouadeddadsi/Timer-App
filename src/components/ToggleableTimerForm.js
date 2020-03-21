import React, { useState } from "react";
import PropTypes from "prop-types";
import TimerForm from "./TimerForm";
import "../styles/ToggleableTimerForm.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function ToggleableTimerForm({ createTimer }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    return <TimerForm setIsOpen={setIsOpen} createTimer={createTimer} />;
  }
  return (
    <div className="footer">
      <button onClick={handleClick}>
        <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  );
}

ToggleableTimerForm.propTypes = {
  createTimer: PropTypes.func.isRequired
};

export default ToggleableTimerForm;
