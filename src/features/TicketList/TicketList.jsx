import React from 'react';
import Layout from '../../ui/Layout';
import Sidebar from '../../ui/Sidebar';
import Checkbox from '../../ui/Checkbox';

export const TicketList = (props) => {
    return (
        <Layout>
            <Sidebar title="Количество пересадок">
                <Checkbox />
            </Sidebar>
        </Layout>
    )
}