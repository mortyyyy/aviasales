import React, { useState, useEffect } from 'react';
import { TabsStyled } from "./styled";
import Tab from './Tab';

export const Tabs = (props) => {
    const { children, tabs } = props;
    const [activeTab, setActiveTab] = useState('');

    useEffect(
        () => {
            if (!activeTab) {
                setActiveTab(tabs[0].value)
            }
        }, [tabs, activeTab]
    );

    return (
        <TabsStyled>
            {(tabs || []).map((tab) => (
                <Tab
                    key={tab.value}
                    active={tab.value === activeTab}
                    onClick={setActiveTab} {...tab}/>
            ))}
        </TabsStyled>
    )
};