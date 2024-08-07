import React from 'react'
import { css } from '@emotion/css'

const styles = {
    barContainer: css`
      display: flex;
      align-items: end;
      gap: 8px;
      flex: 1;
    `
}

const Bar = ({title, color, order_count, height}) => {
  
  return(
    <div
      className={css`
           background-color: ${color} ;
           height: ${height}px;
           flex: 1;
           border-radius: 15px;
        `}
    >

    </div>
  )
}

const BarChart = ({chart_data}) => {

    const maxOrderCount = React.useMemo(()=>{
     const orders_count = chart_data.map((datum)=>{
        return datum.order_count
     })
     return Math.max(...orders_count)
    }, [])

   
  return (
    <div 
     className={styles.barContainer}
    >
     {
      chart_data.map((datum)=>{
        return(
            <Bar key={datum.key} {...datum} height={(datum.order_count / maxOrderCount ) * 100}/>
        )
      })
     }
    </div>
  )
}

export default BarChart