import React, {useEffect, useState} from 'react'
import s from './AlternativeClock.module.css'

function AlternativeClock() {
    const [date, setDate] = useState<Date>()


    useEffect(() => {
        const id = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(id)
    },[])
    const secondsStyle = {'transform': `rotate(${date && date?.getSeconds() * 6 - 90}deg)`}
    const minutesStyle = {'transform': `rotate(${date && date?.getMinutes() * 6 - 90}deg)`}
    const hoursStyle = {'transform': `rotate(${date && date?.getHours() * 30 - 90}deg)`}


    return (
        <div className={s.wrapper}>
            <div className={s.analogClock}>
                <div className={s.seconds} style={secondsStyle}> </div>
                <div className={s.minutes} style={minutesStyle}> </div>
                <div className={s.hours} style={hoursStyle}> </div>
                <div className={s.center}></div>
            </div>
        </div>
    )
}

export default AlternativeClock
