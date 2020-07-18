import React from 'react';
import LogoIcon from '../../assets/images/Logo.svg';

export const Logo = (props) => {
    const { href = '/' } = props;
    return (
        <a href={href}>
            <LogoIcon />
        </a>
    )
}