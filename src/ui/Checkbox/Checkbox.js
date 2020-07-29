import React, { useCallback } from 'react';
import { CheckboxLabelStyled } from './styled';

export const Checkbox = (props) => {
    const { label, name, onChange } = props;

    const handleCheckboxChange = useCallback(
        (e) => {
            onChange(e.target.checked, name)
        }, [name, onChange],
    )

    return (
        <span>
            <CheckboxLabelStyled>
                <input name={name} type="checkbox" onChange={handleCheckboxChange} />
                <span>{label}</span>
            </CheckboxLabelStyled>
        </span>
    );
}