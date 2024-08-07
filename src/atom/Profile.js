import React from 'react';
import { css } from '@emotion/css';
import Text from './Text';

const Profile = ({ url, title = "" }) => {

    return (
        <div className={css`display: flex; gap: 4px; align-items: flex-end`}>
            <div
                className={
                    css`
                    height: 35px;
                    width: 35px;
                    border-radius: 50%;
                    overflow: hidden;
                  `          
                }
            >
                <img height="100%" width="100%" src={url} alt="profile" />
            </div>
            {title && <Text fontStyleGuide='body3'>{title}</Text>}
        </div>
    )
}

export default Profile