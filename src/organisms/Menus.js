import React from 'react'
import Accordian from '../molecules/Accordian'
import { css } from '@emotion/css'

const menus = [
    {
        title: "Goals",
        key: "goals"
    },
    {
        title: "Popular Dishes",
        key: "popular_dishes"
    },
    {
        title: "Menus",
        key: "menus"
    },

]

const styles = {
    accordianWrapper: css`
    background-color: #0c0429;
    padding: 16px;
    border-radius: 10px;
    margin-top: 16px;
  `,
}

const Menus = () => {
  return (
    <div
     className={styles.accordianWrapper}
    >
        {
           menus.map((menu)=>{
            return(
                <Accordian key={menu.key} {...menu}/>
            )
           }) 
        }
    </div>
  )
}

export default Menus