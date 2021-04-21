import React from 'react';
import './Indicators.css';

const Indicators = ({count, activeIndex, className, ...otherProps}) => {

    return (
        <ul className={`Indicators ${className}`} {...otherProps}>
            {
                [...Array(count)].map((e, i) =>
                    <li key={i} className={activeIndex === i ? "Indicator-active" : ""}/>
                )
            }
        </ul>
    );
};

export default Indicators;
