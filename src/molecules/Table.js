import React from "react";
import { css } from '@emotion/css'
import Row from "../atom/layout/Row";
import Col from "../atom/layout/Col";
import Text from "../atom/Text";

const Table = ({columns, dataSource, tableKey}) => {
  
  
  return (
      <div className={css`padding: 8px`}>
        <Row
          gutter={0}
        >
          {columns.map((data, colIndex) => {
            return (
              <Col
                sm={data.span.sm}
                md={data.span.md}
                lg={data.span.lg}
                xl={data.span.xl}
                key={`table_header_${data.columnKey}_${colIndex}`}
              >
                <Row gutter={0} align="middle">
                  <Text fontStyleGuide="body1" >{data.title}</Text>
                </Row>
              </Col>
            );
          })}
        </Row>
     
       
      
          <div
           
          >
            {dataSource.map((item, rowIndex) => {
              return (
                <Row
                  gutter={0}
                >
                  {columns.map((data, colIndex) => {
                    return (
                      <Col
                        sm={data.span.sm}
                        md={data.span.md}
                        lg={data.span.lg}
                        xl={data.span.xl}
                        key={`${data.columnKey}_${rowIndex}_${colIndex}`}
                      >
                        {data.render(item, rowIndex)}
                      </Col>
                    );
                  })}
                </Row>
              );
            })}
          </div>
        
      </div>
      

    
  );
};

export default Table;
