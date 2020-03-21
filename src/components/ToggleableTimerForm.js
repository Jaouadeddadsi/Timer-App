import React from "react";
import PropTypes from "prop-types";
import TimerForm from "./TimerForm";
import "../styles/ToggleableTimerForm.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function ToggleableTimerForm({ isOpen }) {
  if (isOpen) {
    return <TimerForm />;
  }
  return (
    <div className="footer">
      <button>
        <FontAwesomeIcon icon="plus" />
      </button>
    </div>
  );
}

ToggleableTimerForm.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default ToggleableTimerForm;
