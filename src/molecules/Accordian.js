import React from 'react'
import { css } from '@emotion/css'
import Goal from '../atom/icons/Goal'
import Text from '../atom/Text'
import Caret from '../atom/icons/Caret'

const styles = {
    content_wrapper: css`
     display: flex;
     justify-content: space-between;
     align-items: center;
    `
}

const Accordian = ({title}) => {
  return (
    <div
     className={styles.content_wrapper}
    >
      <Goal/>
      <Text fontStyleGuide='body2'>{title}</Text>
      <Caret color='white' direction='right'/>
    </div>
  )
}

export default Accordian