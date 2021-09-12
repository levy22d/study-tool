import React, { useState, useEffect } from 'react';

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

    //fix buttons so they are not weird andugly

    return (
        <div className="timer">
            {timeRemaining >= 0 ? <div className="time"> {hours} : {minutes} : {seconds} </div> : <div>Time's up!</div>}
            {!timerStart && timeRemaining > 0 && 
                <>
                    <button onClick={() => setTimerStart(true)}>Start</button>
                    <button onClick={resetTimer}>Reset</button>
                </>
            }
            {timeRemaining > 0 && timerStart && <button onClick={PauseTimer}>Pause</button> }

            {!timerStart && 
            <div className="timer-buttons">
                <button className="inc-hour" onClick={() => setTimeRemaining(timeRemaining + 3600)}>add an hr</button>
                <button className="inc-min" onClick={() => setTimeRemaining(timeRemaining + 60)}>add a min</button>
                <button className="inc-sec" onClick={() => setTimeRemaining(timeRemaining + 1)}>add a sec</button>
                {timeRemaining >= 3600 && 
                    <button className="dec-hour" onClick={() => setTimeRemaining(timeRemaining - 3600)}>remove an hr</button>}
                {timeRemaining >= 60 && 
                    <button className="dec-min" onClick={() => setTimeRemaining(timeRemaining - 60)}>remove a min</button>}
                {timeRemaining >= 1 && 
                    <button className="dec-sec" onClick={() => setTimeRemaining(timeRemaining - 1)}>remove a sec</button>}
            </div>}
            
        </div>
    )
}

export default Timer;