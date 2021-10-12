import React, { useState, useEffect } from 'react';
import {BsPlay, BsArrowCounterclockwise, BsPause, BsArrowUp, BsArrowDown} from 'react-icons/bs';
import {useAlert} from 'react-alert';
import './timer.css';

function Timer(){
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [timerStart, setTimerStart] = useState(false);
    const alert = useAlert();

    useEffect(() => {
        if(timeRemaining < 0){ 
            setTimerStart(false);
            if(!timerStart){
                alert.show(<span style={{fontFamily: 'Urbanist'}}>Time's up!</span>);
            }
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
        setTimerStart(false);
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

            <div className={timeRemaining >= 0 ? "timer-display" : "completed-timer"}>
                {!timerStart && timeRemaining >= 0 && 
                    (<div className="change-time-buttons inc-buttons">
                        <button className="timer-button inc-hour" onClick={() => setTimeRemaining(timeRemaining + 3600)}><BsArrowUp/></button>
                        <button className="timer-button inc-min" onClick={() => setTimeRemaining(timeRemaining + 60)}><BsArrowUp/></button>
                        <button className="timer-button inc-sec" onClick={() => setTimeRemaining(timeRemaining + 1)}><BsArrowUp/></button>
                    </div>)}
                    
                {timeRemaining >= 0 ? <div className="time"> <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span> </div>
                 : <>
                    <div className="times-up">Time's up!</div>
                    <button className="reset-timer timer-control" onClick={resetTimer}><BsArrowCounterclockwise/></button>
                 </>}

                {!timerStart &&
                    (<div className="change-time-buttons dec-buttons">
                    {timeRemaining >= 3600 ? 
                        <button className="timer-button dec-hour" onClick={() => setTimeRemaining(timeRemaining - 3600)}><BsArrowDown/></button>
                    : <div className="button-filler"></div>}
                    {timeRemaining >= 60 ? 
                        <button className="timer-button dec-min" onClick={() => setTimeRemaining(timeRemaining - 60)}><BsArrowDown/></button>
                    : <div className="button-filler"></div>}
                    {timeRemaining >= 1 ? 
                        <button className="timer-button dec-sec" onClick={() => setTimeRemaining(timeRemaining - 1)}><BsArrowDown/></button>
                        : <div className="empty"></div>}</div>)}
            </div>
            
            {!timerStart && timeRemaining > 0 && 
                <div className="control-buttons">
                    <button className="play-timer timer-control" onClick={() => setTimerStart(true)}><BsPlay/></button>
                    <button className="reset-timer timer-control" onClick={resetTimer}><BsArrowCounterclockwise/></button>
                </div>
            }
            <div className="pause-container">     
                {timeRemaining > 0 && timerStart && <button className="pause-timer timer-control" onClick={PauseTimer}><BsPause/></button> }
            </div>

        </div>
    )
}

export default Timer;