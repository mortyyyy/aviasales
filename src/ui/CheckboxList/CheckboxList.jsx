import React from 'react';
import Checkbox from '../Checkbox'
import { isEmpty } from '../../helpers/isEmpty';
import { CheckboxListItemStyled } from './styled';
export const CheckboxList = (props) => {
    const { checkboxes } = props;

    if (isEmpty(checkboxes)) {
        return null;
    }

    return (
        <ul>
            {
                checkboxes.map((checkboxInfo) => (
                    <CheckboxListItemStyled key={checkboxInfo.name}>
                        <Checkbox key={checkboxInfo.name} {...checkboxInfo} />
                    </CheckboxListItemStyled>
                ))
            }
        </ul>
    )
}