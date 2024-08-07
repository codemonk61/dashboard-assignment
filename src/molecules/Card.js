import React from 'react'
import Bag from '../atom/icons/Bag'
import Caret from '../atom/icons/Caret'
import { css } from '@emotion/css'
import Text from "../atom/Text"



const styles = {
  cardParentWrapper: css`
    background-color: #0c0429;
    padding: 8px;
    border-radius: 10px;
  `,
  cardChildWrpper: css`
   display: flex;
   justify-content: space-between;
   align-items: center;
`,
  innerContentWrapper: css`
   display: flex;
   gap: 8px;
   align-items: center;
`
}
const Card = (
  {
    title="Total Orders",
    order_count= "56",
    order_status="total_order",
    percentage= "6%",
    revenue= "$61k"
}
) => {
 

  return (
    <div className={styles.cardParentWrapper}>
      <Bag color='white'/>
      <Text fontStyleGuide="body3" >{title}</Text>
      <div 
      className={styles.cardChildWrpper}
      >
        <Text fontStyleGuide="title1">{order_count}</Text>
        <div className={styles.innerContentWrapper}>
         <Caret color="white" direction="top"/>
         <Text ffontStyleGuide="body3">{percentage}</Text>
        </div>
      </div>
    </div>
  )
}

export default Card