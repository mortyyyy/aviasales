import React from 'react';
import { CheckboxLabelStyled } from './styled';

export const Checkbox = (props) => {
    const { label } = props;
    return (
        <span>
            <CheckboxLabelStyled>
                <input type="checkbox" value="ffs"/>
                <span>{label || 'label'}</span>
            </CheckboxLabelStyled>
        </span>
    );
}