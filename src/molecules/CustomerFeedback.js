import React from 'react'
import { css } from '@emotion/css'
import Profile from '../atom/Profile'
import Text from '../atom/Text'
import StarRating from '../atom/StarRating'

const defaultMassage = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"

const CustomerFeedback = ({title="Jon Doe", message={defaultMassage}, customer_rating}) => {
  return (
    <div className={css`margin-bottom: 16px;`}>
         <Profile url={`https://newprofilepicapp.com/wp-content/uploads/2024/02/New-Profile-Pic-App.webp`} title={title}/>
         <StarRating customerRating={customer_rating}/>
         <Text fontStyleGuide='body3' mt="xs">{message}</Text>
    </div>
  )
}

export default CustomerFeedback