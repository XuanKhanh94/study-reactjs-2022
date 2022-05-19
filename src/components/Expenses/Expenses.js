import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {

    return (
        <Card className='expenses'>
            <ExpenseItem date={props.items[0].date} title={props.items[0].title} price={props.items[0].price} />
            <ExpenseItem date={props.items[1].date} title={props.items[1].title} price={props.items[1].price} />
            <ExpenseItem date={props.items[2].date} title={props.items[2].title} price={props.items[2].price} />
            <ExpenseItem date={props.items[3].date} title={props.items[3].title} price={props.items[3].price} />
            <ExpenseItem date={props.items[4].date} title={props.items[4].title} price={props.items[4].price} />

        </Card>
    );
}

export default Expenses;