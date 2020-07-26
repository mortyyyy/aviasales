import React from 'react';
import { SidebarStyled, SidebarTitleStyled } from './styled';

export const Sidebar = (props) => {
    const { title, children } = props;
    return (
        <SidebarStyled>
            {title && (
                <SidebarTitleStyled>
                    {title}
                </SidebarTitleStyled>
            )}
            {children}
        </SidebarStyled>
    )
}