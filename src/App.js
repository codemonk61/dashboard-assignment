import React from 'react'
import { Provider } from "react-redux"
import { store } from "./redux/redux"
import { Global, css } from '@emotion/react';
import Row from './atom/layout/Row';
import Col from './atom/layout/Col';
import Header from './layout/Header';
import SideBar from './layout/SideBar';
import OrderSummary from './organisms/OrderSummary';
import OrderProfit from './organisms/OrderProfit';
import Text from './atom/Text';
import Menus from './organisms/Menus';
import CustomerFeedbacks from './organisms/CustomerFeedbacks';
import OrderGraph from './organisms/OrderGraph';
import OrderTable from './organisms/OrderTable';
import ResponsiveDiv from './molecules/common/ResponsiveDiv';





const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    color: #333;
    background-color: black;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Provider store={store}>

        <Row gutter={0}>
          <Col xl={1} xs={0} sm={0} lg={1} xxl={1} md={0}>
            <SideBar />
          </Col>
          <Col xl={23} xs={24} sm={24} md={24} >
            <Header />
            <ResponsiveDiv xs={css`padding: 0px 12px`}>
              {/* zero row start */}
              <Row gutter={0}>
                <Col xl={20}>
                  <Text fontStyleGuide='title3' ml="sm" mt="lg">Dasboard</Text>
                </Col>
              </Row>

              {/* first row */}
              <Row gutter={0} justify={'space-between'}>
                <Col xl={17} xs={24} sm={24} md={24}>
                  <OrderSummary />
                </Col>
                <Col xl={6} xs={24} sm={24} md={24}>
                  <OrderProfit />
                </Col>
              </Row>
              {/* first end */}

              {/* 2nd row start*/}
              <Row gutter={0} justify={'space-between'} align={"end"}>
                <Col xl={17} xs={24} sm={24} md={24}>
                  <OrderGraph />
                </Col>
                <Col xl={6} xs={24} sm={24} md={24}>
                  <Menus />
                </Col>
              </Row>
              {/* 2nd row end*/}

              {/* 3rd row start */}
              <Row gutter={0} justify={'space-between'}>
                <Col xl={17}>
                  <OrderTable />
                </Col>
                <Col xl={6} xs={24} sm={24} md={24}>
                  <CustomerFeedbacks />
                </Col>
              </Row>
              {/* 3rd row end */}
            </ResponsiveDiv>
          </Col>
        </Row>

      </Provider>
    </>
  );
}

export default App;
