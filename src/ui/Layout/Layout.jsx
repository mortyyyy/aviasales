import React from 'react';
import { LayoutStyled, LogoWrapperStyled } from './styled';
import { Logo } from '../../ui/Logo/Logo';
export const Layout = (props) => {
    const { children } = props;
    return (
        <LayoutStyled>
            <LogoWrapperStyled>
                <Logo />
            </LogoWrapperStyled>
            {children}
        </LayoutStyled>
    )
}