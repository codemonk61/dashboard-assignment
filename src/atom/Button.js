import React from 'react'
import Caret from './icons/Caret'
import { css } from '@emotion/css'

const Button = ({ cta = "Click", color = "", icon = null }) => {
    return (
        <button className={css`border: none; outline: none; background: ${color};border-radius: 10px;`}>
            {icon && <Caret height="10" width="10" color="color" />}
            {cta}
        </button>
    )
}

export default Button