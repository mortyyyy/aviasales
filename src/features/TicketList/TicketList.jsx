import React, { useEffect } from 'react';
import Layout from '../../ui/Layout';
import Sidebar from '../../ui/Sidebar';
import CheckboxList from '../../ui/CheckboxList';
import { OptionsOfNumberTransfersList } from './constants';
import { useDispatch } from 'react-redux';
import { fetchSearchId, startFetchTicketLoop } from './actions';
import Tabs from "../../ui/Tabs";
import { TicketListStyled } from "./styled";

const tabs = [{ label: 'Самый дешевый', value: 'cheapest' }, { label: 'Самый быстрый', value: 'faster' }];

export const TicketList = () => {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(fetchSearchId())
                .then(() => {
                    dispatch(startFetchTicketLoop())
                })
        }, [],
    )

    return (
        <Layout>
            <TicketListStyled>
                <Sidebar title="Количество пересадок">
                    <CheckboxList checkboxes={OptionsOfNumberTransfersList}/>
                </Sidebar>
                <Tabs tabs={tabs}>
                </Tabs>
            </TicketListStyled>
        </Layout>
    )
}