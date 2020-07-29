import React from 'react';
import Layout from '../../ui/Layout';
import Sidebar from '../../ui/Sidebar';
import CheckboxList from '../../ui/CheckboxList';
import { OptionsOfNumberTransfersList } from './constants';

export const TicketList = () => {
    return (
        <Layout>
            <Sidebar title="Количество пересадок">
                <CheckboxList checkboxes={OptionsOfNumberTransfersList} />
            </Sidebar>
        </Layout>
    )
}