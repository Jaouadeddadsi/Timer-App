import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Timer.css";

library.add(fas);

const convertSeconds = str => {
  const sec = parseInt(str);
  const hrs = Math.floor(sec / 3600);
  const min = Math.floor((sec - hrs * 3600) / 60);
  let seconds = sec - hrs * 3600 - min * 60;
  seconds = Math.round(seconds * 100) / 100;

  let result = hrs < 10 ? "0" + hrs : hrs;
  result += ":" + (min < 10 ? "0" + min : min);
  result += ":" + (seconds < 10 ? "0" + seconds : seconds);
  return result;
};

function Timer({ timer, handleEdit, deleteTimer, updateElapsed }) {
  const stringElapsed = convertSeconds(timer.elapsed);
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const countup = clicked && setInterval(() => updateElapsed(timer.id), 1000);
    return () => clearInterval(countup);
  }, [clicked, timer.id, updateElapsed]);

  return (
    <div>
      <div className="timer">
        <div className="timer-title">
          <h3>{timer.title}</h3>
          <p>{timer.project}</p>
        </div>
        <div className="timer-elapsed">
          <p>{stringElapsed}</p>
        </div>
        <div className="timer-actions">
          <span className="trash" onClick={() => deleteTimer(timer.id)}>
            <FontAwesomeIcon icon="trash-alt" />
          </span>
          <span className="edit" onClick={() => handleEdit(timer.id)}>
            <FontAwesomeIcon icon="edit" />
          </span>
        </div>
      </div>
      {!clicked ? (
        <div className="start" onClick={() => setClicked(!clicked)}>
          <p>Start</p>
        </div>
      ) : (
        <div className="stop" onClick={() => setClicked(!clicked)}>
          <p>Stop</p>
        </div>
      )}
    </div>
  );
}

Timer.propTypes = {
  timer: PropTypes.object.isRequired,
  handleEdit: PropTypes.func.isRequired,
  deleteTimer: PropTypes.func.isRequired
};

export default Timer;
