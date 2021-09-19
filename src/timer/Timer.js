import React, { useState, useEffect } from 'react';
import {BsPlay, BsArrowCounterclockwise, BsPause} from 'react-icons/bs';
import './timer.css';

function Timer(){
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [timerStart, setTimerStart] = useState(false);

    useEffect(() => {
        if(timeRemaining < 0){
            setTimerStart(false);
            return;
        }

        if(timerStart){
            const intervalId = setInterval(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000)
    
            return () => clearInterval(intervalId);
        }
        
    }, [timerStart, timeRemaining]);

    function PauseTimer(){
        setTimerStart(false);
    }

    function resetTimer(){
        setTimeRemaining(0);
    }
    
    let hours = Math.floor(timeRemaining / 3600);
    hours = hours >= 10 ? hours : "0" + hours;
    let minutes = Math.floor(timeRemaining / 60) % 60;
    minutes = minutes >= 10 ? minutes : "0" + minutes;
    let seconds = timeRemaining % 60;
    seconds = seconds >= 10 ? seconds : "0" + seconds;

    return (
        <div className="timer app-section">
            <h2 className="timer-title">Study Timer</h2>
            {timeRemaining >= 0 ? <div className="time"> {hours} : {minutes} : {seconds} </div> : <div>Time's up!</div>}
            {!timerStart && timeRemaining > 0 && 
                <div className="control-buttons">
                    <button className="play-timer timer-control" onClick={() => setTimerStart(true)}><BsPlay/></button>
                    <button className="reset-timer timer-control" onClick={resetTimer}><BsArrowCounterclockwise/></button>
                </div>
            }
            {timeRemaining > 0 && timerStart && <button className="pause-timer timer-control" onClick={PauseTimer}><BsPause/></button> }

            {!timerStart && 
            <div className="timer-buttons">
                <button className="inc-hour" onClick={() => setTimeRemaining(timeRemaining + 3600)}>+ 1 Hour</button>
                <button className="inc-min" onClick={() => setTimeRemaining(timeRemaining + 60)}>+ 1 Minute</button>
                <button className="inc-sec" onClick={() => setTimeRemaining(timeRemaining + 1)}>+ 1 Second</button>
                {timeRemaining >= 3600 && 
                    <button className="dec-hour" onClick={() => setTimeRemaining(timeRemaining - 3600)}>- 1 Hour</button>}
                {timeRemaining >= 60 && 
                    <button className="dec-min" onClick={() => setTimeRemaining(timeRemaining - 60)}>- 1 Minute</button>}
                {timeRemaining >= 1 && 
                    <button className="dec-sec" onClick={() => setTimeRemaining(timeRemaining - 1)}>- 1 Second</button>}
            </div>}
            
        </div>
    )
}

export default Timer;