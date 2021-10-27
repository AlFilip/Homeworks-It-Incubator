import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        setDate(new Date())
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const getZero = (n: number): string => n < 10 ? `0${n}` : n.toString()
    const getStringTime = (d?: Date) => {
        if (!d) return ''
        const hours = d.getHours()
        const minutes = d.getMinutes()
        const seconds = d.getSeconds()
        return `${getZero(hours)}:${getZero(minutes)}:${getZero(seconds)}`
    }
    const getStringDate = (d?: Date) => {
        if (!d) return ''
        const day = d.getDate()
        const month = d.getMonth() + 1
        const year = d.getFullYear()
        return `${getZero(day)}/${getZero(month)}/${getZero(year)}`
    }

    const stringDate = getStringDate(date) // fix with date
    const stringTime = getStringTime(date) // fix with date

    return (
        <div>
            <div className={s.clock}>
                <div onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
