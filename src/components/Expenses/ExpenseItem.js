import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    const handleChangeTitle = () => {
        setTitle('Update!')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>
            <button onClick={handleChangeTitle}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;