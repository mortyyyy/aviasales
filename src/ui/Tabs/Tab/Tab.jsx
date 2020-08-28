import React, { useCallback } from 'react';
import { TabStyled } from './styled';

export const Tab = (props) => {
    const { label, value, active, onClick } = props;

    const handleTabClick = useCallback(
        () => {
            onClick(value);
        }, [label, value, onClick]
    );

    return (
        <TabStyled onClick={handleTabClick} active={active}>
            {label}
        </TabStyled>
    )
};