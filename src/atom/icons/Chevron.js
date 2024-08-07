import React from 'react'
import { css } from '@emotion/css'

const arrowDirection = {
    right: "0deg",
    top: "270deg",
    bottom: "90deg",
    left: "180deg"
}

const Chevron = ({height="24", width="24", color="white", direction="left"}) => {
  return (
    <svg className={css`transform: rotate(${arrowDirection[direction]})`} height={height} width={width} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
  )
}

export default Chevron