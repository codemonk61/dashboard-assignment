import React from 'react'
import Star from './icons/Star'
import FilledStar from './icons/FilledStar'
import { css } from '@emotion/css'

const stars = [1, 2, 3, 4, 5]

const StarRating = ({customerRating}) => {
  return (
    <div className={css`display: flex; gap: 4px; align-items: center`}> 
        {
            stars.map((star)=>{
             return(
                <React.Fragment key={star}>
                {
                   customerRating <= star ? <Star/> : <FilledStar/>
                }
                </React.Fragment>
             )
            })
        }
    </div>
  )
}

export default StarRating