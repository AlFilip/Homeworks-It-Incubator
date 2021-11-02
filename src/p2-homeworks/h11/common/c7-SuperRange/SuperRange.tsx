import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {CustomizedSlider} from "../c8-SuperDoubleRange/SuperDoubleRange";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    max?: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const handleChange = (event: Event, value: number | Array<number>, activeThumb: number) => {
        onChangeRange
        && (!restProps.max || value <= restProps.max)
        && onChangeRange(+value)
    }
    const value = restProps.value ? +restProps.value : 0

    return (
        <>
            <CustomizedSlider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                track={false}
                style={{'margin': '0 2em', 'width': '200px'}}
            />
        </>
    )
}

export default SuperRange
