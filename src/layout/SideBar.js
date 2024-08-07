import React from 'react'
import { css } from '@emotion/css';

import Email from '../atom/icons/Email'
import ResponsiveDiv from '../molecules/common/ResponsiveDiv';
import Home from '../atom/icons/Home';
import Paste from '../atom/icons/Paste';
import Chart from '../atom/icons/Chart';
import Grid from '../atom/icons/Grid';
import Bar from '../atom/icons/Bar';

const sidebar_data = [
    {
        label: "Home",
        key: "home",
    },
    {
        label: "Analytics",
        key: "analytics",
    },
    {
        label: "Page",
        key: "page",
    },
    {
        label: "Wallet",
        key: "wallet",
    },
    {
        label: "Page",
        key: "page",
    }
]

const icon_mapper = {
    home: <Home color="white"/>,
    analytics: <Chart color="white"/>,
    page: <Paste color="white"/>,
    wallet: <Email color="white"/>
}

const SideBar = () => {
    return (
        <>
        <ResponsiveDiv
        xl={null}
        xxl={null}
        sm={
            css`
             background-color: #0c0429;
         
             display: flex;
             flex-direction: column;
             align-items: center;
            `
        }
        xs={
            css`
             background-color: #0c0429;
       
             display: flex;
             flex-direction: column;
             align-items: center;
            `
        }
        >
            <Bar
/>        </ResponsiveDiv>
        <ResponsiveDiv
            xl={css`
             background-color: #0c0429;
             min-height: 100vh;
             display: flex;
             flex-direction: column;
             align-items: center;
             gap: 16px; 
            `}
            xxl={css`
                background-color: #0c0429;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px; 
               `}
               xs={null}
               sm={null}
        >
            <ResponsiveDiv
             xl={
                css`
                  margin-top: 16px;
                `
             }
             xxl={
                css`
                  margin-top: 16px;
                `
             }
             xs={null}
             sm={null}
         
            >
                <Grid color="white"/>
            </ResponsiveDiv>
            
            {
                sidebar_data.map((datum, index) => {
                    return (
                        <div key={index}>
                            {icon_mapper[datum.key]}
                        </div>
                    )
                })
            }
        </ResponsiveDiv>
        </>
    )
}

export default SideBar