import React from 'react';
import style from './../../style/components/member.module.css';

const Member = (props) => {
    const { name } = props;
    return (
        <div className={style.circleContainer}>
            <h1>{name}</h1>
        </div>
    );
};

export default Member;