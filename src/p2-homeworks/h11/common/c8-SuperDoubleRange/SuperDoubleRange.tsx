import React from 'react'
import {Slider} from "@mui/material";
import styled from '@emotion/styled';



type SuperDoubleRangePropsType = {
    onChangeRange?: (value: Array<number>) => void
    value: Array<number>
    min?: number
    max?: number
    step?: number
    disable?: boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min,
        max,
        step,
        disable,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    const handleChange = (event: Event, value: number | Array<number>, activeThumb: number) => {
        const helper = (value: Array<number>): Array<number> => {
            event.target && console.log(event.target)
            return value
        }
        onChangeRange
        && Array.isArray(value)
        && onChangeRange(helper(value))
    }


    return (
        <>
            <CustomizedSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                track={false}
            />
        </>
    )
}

export const CustomizedSlider = styled(Slider)`
  color: #008cba;
  margin: 0 2em;
  width: 200px;  
  transition-duration: 0.4s;

  :hover {
    color: #1e6278;
  }
`

export default SuperDoubleRange
