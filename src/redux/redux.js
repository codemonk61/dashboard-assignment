import { createStore } from "redux"

const initialData = {
    order_summary: [
        {
            title: "qwerty",
            order_count: "56",
            order_status: "total_order",
            percentage: "6%",
            revenue: ""
        },
        {
            title: "qwerty",
            order_count: "56",
            order_status: "delivered",
            percentage: "6%",
            revenue: ""
        },
        {
            title: "qwerty",
            order_count: "56",
            order_status: "cancelled",
            percentage: "6%",
            revenue: ""
        },
        {
            title: "qwerty",
            order_count: "56",
            order_status: "total_revenue",
            percentage: "6%",
            revenue: "$61k"
        }
    ],
    profit_data: {
        title: "Net Profit",
        price: "$2345.7",
        profit_percentage: 30,
    }
}

const orderReducer = (state = initialData, action) => {
    return state;
}

export const store = createStore(orderReducer)