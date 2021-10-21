import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption
        && onChangeOption(e.currentTarget.value)

        onChange
        && onChange(e)
        // onChange, onChangeOption
    }

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                // name, checked, value, onChange
                name={o}
                checked={value === o}
                value={o}
                onChange={onChangeCallback}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio