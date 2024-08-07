import React from 'react'
import { css } from '@emotion/css'
import Text from '../atom/Text';
import Table from '../molecules/Table';
import Button from '../atom/Button';

const table_data = [
    {
        "customer": "Michael",
        "order_number": "12345400",
        "amount": "35",
        "status": "success"
    },
    {
        "customer": "Jessica",
        "order_number": "65432100",
        "amount": "42",
        "status": "failure"
    },
    {
        "customer": "Thomas",
        "order_number": "78901200",
        "amount": "57",
        "status": "pending"
    },
    {
        "customer": "Amanda",
        "order_number": "34567800",
        "amount": "25",
        "status": "success"
    },
    {
        "customer": "Robert",
        "order_number": "98765400",
        "amount": "33      ",
        "status": "failure"
    },
    {
        "customer": "Emily",
        "order_number": "23456700",
        "amount": "48",
        "status": "pending"
    },
    {
        "customer": "Daniel  ",
        "order_number": "45678900",
        "amount": "29",
        "status": "success"
    },
    {
        "customer": "Sarah",
        "order_number": "56789000",
        "amount": "40",
        "status": "failure"
    }
]

const statusMapper = {
    failure: "red",
    success: "green",
    pending: "orange"
}

const getColumns = () => {
    return [
        {
            columnKey: "customer",
            title: "Customer",
            render: (datum) => (
                <Text fontStyleGuide="body3" >
                    {datum.customer}
                </Text>
            ),
            span: {
                xs: 2,
                sm: 2,
                md: 2,
                lg: 6,
                xl: 6,
            },
        },
        {
            columnKey: "order_number",
            title: "Order No.",
            render: (datum) => (
                <Text fontStyleGuide="body3">
                    {datum.order_number}
                </Text>
            ),
            span: {
                xs: 2,
                sm: 2,
                md: 2,
                lg: 6,
                xl: 6,
            },
        },
        {
            columnKey: "order_amount",
            title: "Amount",
            render: (datum) => (
                <Text fontStyleGuide="body3" >
                    {datum.amount}
                </Text>
            ),
            span: {
                xs: 2,
                sm: 2,
                md: 2,
                lg: 6,
                xl: 6,
            },
        },
        {
            columnKey: "status",
            title: "Status",
            render: (datum) => (
                <Button color={statusMapper[datum.status]} cta={datum.status}/>
            ),
            span: {
                xs: 2,
                sm: 2,
                md: 2,
                lg: 6,
                xl: 6,
            },
        },
    ];
};
const OrderTable = () => {
    return (
        <div
            className={css`
            margin-top: 16px;
            background-color: #0c0429;
            padding: 16px;
            border-radius: 10px;
        `}
        >
            <Table dataSource={table_data} columns={getColumns()} />
        </div>
    )
}

export default OrderTable