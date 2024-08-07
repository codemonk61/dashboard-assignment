import React from 'react'
import { css } from '@emotion/css'

export const margins = {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lmd: '16px',
    lg: '18px',
    xlg: '24px',
    xxlg: '32px',
    xxxlg: '40px',
    xxxxlg: '64px',
}

const fontStyleGuideMap = {
    title: css`
      font-family: var(--title1), sans-serif;
      font-weight: var(--title1_weight);
      font-size: 72px;
      line-height: 76px;
    `,
    title1: css`
      font-family: var(--title1), sans-serif;
      font-weight: var(--title1_weight);
      font-size: 48px;
      line-height: 60px;
    `,
    title2: css`
      font-family: var(--title2), sans-serif;
      font-weight: var(--title2_weight);
      font-size: 32px;
      line-height: 44px;
    `,
    title3: css`
      font-family: var(--title3), sans-serif;
      font-weight: var(--title3_weight);
      font-size: 21px;
      line-height: 28px;
    `,
    heading1: css`
      font-family: var(--heading), sans-serif;
      font-weight: var(--heading_weight);
      font-size: 16px;
      line-height: 24px;
    `,
    body1: css`
      font-family: var(--body), sans-serif;
      font-weight: var(--body_weight);
      font-size: 16px;
      line-height: 24px;
    `,
    heading2: css`
      font-family: var(--heading), sans-serif;
      font-weight: var(--heading_weight);
      font-size: 14px;
      line-height: 20px;
    `,
    body2: css`
      font-family: var(--body), sans-serif;
      font-weight: var(--body_weight);
      font-size: 14px;
      line-height: 20px;
    `,
    heading3: css`
      font-family: var(--heading), sans-serif;
      font-weight: var(--heading_weight);
      font-size: 12px;
      line-height: 16px;
    `,
    body3: css`
      font-family: var(--body), sans-serif;
      font-weight: var(--body_weight);
      font-size: 12px;
      line-height: 16px;
    `, 
    body4: css`
      font-family: var(--body), sans-serif;
      font-weight: var(--body_weight);
      font-size: 10px;
      line-height: 14px;
    `, 
  }

const Text = (
    {
        children,
        RenderAs = "p",
        color = "white",
        mb = "",
        mt = "",
        ml = "",
        mr = "",
        fontStyleGuide=""
    }
) => {
    return (
        <RenderAs
            className={
                css`
                margin-right: ${margins[mr] || '0px'};
                margin-left: ${margins[ml] || '0px'};
                margin-top: ${margins[mt] || '0px'};
                color: ${color};
                ${fontStyleGuide && fontStyleGuideMap[fontStyleGuide]};
            `}
        >
            {children}
        </RenderAs>
    )
}

export default Text