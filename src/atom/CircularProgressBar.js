/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const CircularProgress = ({ progress, size = 100, strokeWidth = 10, color = '#E6E6FA' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      css={css`
        transform: rotate(-90deg);
        overflow: visible;
      `}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        css={css`
          transition: stroke-dashoffset 0.35s;
        `}
      />
    </svg>
  );
};

export default CircularProgress;
