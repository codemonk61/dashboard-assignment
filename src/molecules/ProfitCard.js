import React from 'react';
import { css } from '@emotion/css';
import Text from '../atom/Text';
import Caret from '../atom/icons/Caret';
import CircularProgress from '../atom/CircularProgressBar';

const styles = {
    profitCardWrapper: css`
    background-color: #0c0429;
    padding: 8px;
    border-radius: 10px;
    display: flex;
    align-items: bottom;
    justify-content: space-between
  `,
    innerContentWrapper: css`
    display: flex;
    align-items: center;
  `
}

const ProfitCard = ({ 
    title = "Net Profit",
    price = "$2345.7",
    profit_percentage = 30,
 }) => {
    return (
        <div className={styles.profitCardWrapper}>
            <div>
                <Text fontStyleGuide='body3'>{title}</Text>
                <Text fontStyleGuide='title1'>{price}</Text>
                <div className={styles.innerContentWrapper}>
                    <Caret color="green" direction='top' />
                    <Text fontStyleGuide='body3' color="green">{profit_percentage}</Text>
                </div>
            </div>
            <div>
                <CircularProgress progress={profit_percentage} size={50} strokeWidth={5} color="#ef92f7" />
                <Text fontStyleGuide='body3'>lorem ipsum</Text>
            </div>
        </div>
    )
}

export default ProfitCard