import React from 'react'
import Col from '../atom/layout/Col'
import Row from '../atom/layout/Row'
import Input from '../atom/Input'
import Email from '../atom/icons/Email'
import ResponsiveDiv from '../molecules/common/ResponsiveDiv'
import Setting from '../atom/icons/Setting'
import Bell from '../atom/icons/Bell'
import Profile from '../atom/Profile'
import { css } from '@emotion/css';
import Search from '../atom/icons/Search'
import Bar from '../atom/icons/Bar'
import Home from '../atom/icons/Home';
import Paste from '../atom/icons/Paste';
import Chart from '../atom/icons/Chart';
import Text from '../atom/Text'


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
    home: <Home color="white" />,
    analytics: <Chart color="white" />,
    page: <Paste color="white" />,
    wallet: <Email color="white" />
}

const Header = () => {
    const [toggle, setToggle] = React.useState(false)
    const [openSearch, setOpenSearch] = React.useState(false)
    return (
        <ResponsiveDiv
            className={
                css`
              background-color: #0c0429;
              padding: 8px;
              position: relative;
        
            `
            }
        >


            <Row
                justify='space-between'
                gutter={0}
                align={'center'}

            >
                <Col xl={0} xs={12} sm={12} lg={12} xxl={0} md={12} onClick={() => { setToggle(!toggle) }}>
                    <Bar />
                </Col>
                <Col xl={6} xs={0} sm={0} lg={0} xxl={6} md={0}>
                    <Input />
                </Col>
                <Col xl={3} xs={12} sm={12}>
                    <ResponsiveDiv
                        className={
                            css`
                      display: flex;
                      gap: 8px;
                      align-items: center;
                    `
                        }
                    >
                        <ResponsiveDiv onClick={() => setOpenSearch(!openSearch)} xl={null} xs={true} sm={true} lg={null} xxl={null} md={true}>
                            <Search />
                        </ResponsiveDiv>
                        <ResponsiveDiv className={css`margin-right: 4px`}>

                            <Email color='white' />
                        </ResponsiveDiv >
                        <ResponsiveDiv className={css`margin-right: 4px`}>
                            <Setting color='white' />
                        </ResponsiveDiv>
                        <ResponsiveDiv className={css`margin-right: 4px`}>
                            <Bell color='white' className={css`margin-right: 4px`} />
                        </ResponsiveDiv>
                        <Profile url={`https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp`} />
                    </ResponsiveDiv>

                </Col>
            </Row>
            {
                toggle &&
                <ResponsiveDiv
                    className={css`
                     display: flex;
                     flex-direction: column;
                     
                    `}
                >
                    {
                        sidebar_data.map((datum) => {
                            return (
                                <ResponsiveDiv key={datum.key} className={css`margin: 16px 0; display: flex; align-items: bottom; gap: 8px; flex: 1`}>
                                    {icon_mapper[datum.key]}
                                    <Text fontStyleGuide='body2' >{datum.label}</Text>
                                </ResponsiveDiv>
                            )
                        })
                    }
                </ResponsiveDiv>
            }
            {
                openSearch &&
                <Row gutter={0}>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                    >
                        <Input />
                    </Col>
                </Row>
            }
        </ResponsiveDiv>
    )
}

export default Header