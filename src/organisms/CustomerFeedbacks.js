import React from 'react'
import { css } from '@emotion/css'
import CustomerFeedback from '../molecules/CustomerFeedback'

const customer_feedbacks = [
    {
        title: "Jon Doe",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        customer_rating: 3,
        key: 1
    },
    {
        title: "Jon Doe",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        customer_rating: 4,
        key: 2
    },
    {
        title: "Jon Doe",
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        customer_rating: 2,
        key: 3,
    }
]

const styles = {
    customerFeedbackWrapper: css`
      margin-top: 16px;
      background-color: #0c0429;
      padding: 8px;
      border-radius: 10px;

    `
}

const CustomerFeedbacks = () => {
  return (
    <div
     className={styles.customerFeedbackWrapper}
    >
        {
            customer_feedbacks.map((feedback)=>{
                return(
                    <CustomerFeedback key={feedback.key} {...feedback}/>
                )
            })
        }
    </div>
  )
}

export default CustomerFeedbacks