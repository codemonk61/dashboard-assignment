import React from 'react'
import { css } from '@emotion/css'
import BarChart from '../molecules/BarChart'

const graph_data = [
    {
        "key": "a1b2c3d4",
        "title": "order_count",
        "order_count": 15,
        "color": "#ef92f7"
    },
    {
        "key": "e5f6g7h8",
        "title": "order_count",
        "order_count": 25,
        "color": "#ef92f7"
    },
    {
        "key": "i9j0k1l2",
        "title": "order_count",
        "order_count": 10,
        "color": "#ef92f7"
    },
    {
        "key": "m3n4o5p6",
        "title": "order_count",
        "order_count": 30,
        "color": "#ef92f7"
    },
    {
        "key": "q7r8s9t0",
        "title": "order_count",
        "order_count": 12,
        "color": "#ef92f7"
    },
    {
        "key": "u1v2w3x4",
        "title": "order_count",
        "order_count": 18,
        "color": "#ef92f7"
    },
    {
        "key": "y5z6a7b8",
        "title": "order_count",
        "order_count": 22,
        "color": "#ef92f7"
    },
    {
        "key": "c9d0e1f2",
        "title": "order_count",
        "order_count": 14,
        "color": "#ef92f7"
    },
    {
        "key": "g3h4i5j6",
        "title": "order_count",
        "order_count": 26,
        "color": "#ef92f7"
    },
    {
        "key": "k7l8m9n0",
        "title": "order_count",
        "order_count": 20,
        "color": "#ef92f7"
    },
    {
        "key": "o1p2q3r4",
        "title": "order_count",
        "order_count": 17,
        "color": "#ef92f7"
    },
    {
        "key": "s5t6u7v8",
        "title": "order_count",
        "order_count": 13,
        "color": "#ef92f7"
    },
    {
        "key": "w9x0y1z2",
        "title": "order_count",
        "order_count": 29,
        "color": "#ef92f7"
    },
    {
        "key": "a3b4c5d6",
        "title": "order_count",
        "order_count": 19,
        "color": "#ef92f7"
    },
    {
        "key": "e7f8g9h0",
        "title": "order_count",
        "order_count": 21,
        "color": "#ef92f7"
    },
    {
        "key": "i1j2k3l4",
        "title": "order_count",
        "order_count": 11,
        "color": "#ef92f7"
    },
    {
        "key": "m5n6o7p8",
        "title": "order_count",
        "order_count": 24,
        "color": "#ef92f7"
    },
    {
        "key": "q9r0s1t2",
        "title": "order_count",
        "order_count": 16,
        "color": "#ef92f7"
    },
    {
        "key": "u3v4w5x6",
        "title": "order_count",
        "order_count": 23,
        "color": "#ef92f7"
    },
    {
        "key": "y7z8a9b0",
        "title": "order_count",
        "order_count": 27,
        "color": "#ef92f7"
    },
    {
        "key": "c1d2e3f4",
        "title": "order_count",
        "order_count": 28,
        "color": "#ef92f7"
    },
    {
        "key": "g5h6i7j8",
        "title": "order_count",
        "order_count": 31,
        "color": "#ef92f7"
    },
    {
        "key": "k9l0m1n2",
        "title": "order_count",
        "order_count": 32,
        "color": "#ef92f7"
    },
    {
        "key": "o3p4q5r6",
        "title": "order_count",
        "order_count": 33,
        "color": "#ef92f7"
    },
    {
        "key": "s7t8u9v0",
        "title": "order_count",
        "order_count": 34,
        "color": "#ef92f7"
    },
    {
        "key": "w1x2y3z4",
        "title": "order_count",
        "order_count": 35,
        "color": "#ef92f7"
    }
];




const OrderGraph = () => {
  return (
    <div
     className={ css`
        background-color: #0c0429;
        padding: 16px;
        margin-top: 16px;
        border-radius: 10px;
      `}
    >
        <BarChart chart_data={graph_data}/>
    </div>
  )
}

export default OrderGraph