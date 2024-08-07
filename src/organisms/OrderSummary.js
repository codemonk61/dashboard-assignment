import React from 'react';
import { css } from '@emotion/css'
import { useSelector } from 'react-redux'
import Card from '../molecules/Card';
import Row from '../atom/layout/Row';
import Col from '../atom/layout/Col';
import ResponsiveDiv from '../molecules/common/ResponsiveDiv';

const OrderSummary = () => {
    const cardData = useSelector((state) => state.order_summary)
  return (
   <ResponsiveDiv xs={css`margin-bottom: 16px`} sm={css`margin-bottom: 16px`} md={css`margin-bottom: 16px`}>
    <Row gutter={16} justify='space-between'>
     {
        cardData.map((datum, index)=>{
            return(
                <Col sm={11} xs={24} xl={5} key={index}>
                    <Card {...datum}/>
                </Col>
            )
        })
     }
    </Row>
   </ResponsiveDiv> 
  )
}

export default OrderSummary