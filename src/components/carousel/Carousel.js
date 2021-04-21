import React, {useState} from "react";
import NavButton from './NavButton.js';
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import './Carousel.css';
import Indicators from './Indicators';

const Carousel = ({children}) => {
    const [activeBlockIndex, setActiveBlockIndex] = useState(0);

    const getBlocks = () => {
        if (!!!children) {
            return []
        }
        if (!!!children.length) {
            return [children];
        }
        if (children.length) {
            return children
        }
    };

    const onNextClicked = () => {
        setActiveBlockIndex(activeBlockIndex + (activeBlockIndex < blocks.length - 1))
    };

    const onPrevClicked = () => {
        setActiveBlockIndex(activeBlockIndex - (activeBlockIndex > 0))
    };

    const blocks = getBlocks();
    const isNextAvailable = activeBlockIndex < blocks.length - 1;
    const isPrevAvailable = activeBlockIndex > 0;

    return (
        <div className="Carousel-container">
            <div className="Carousel">
                <NavButton
                    disabled={!isPrevAvailable}
                    className="Carousel-button Carousel-button-prev"
                    icon={faChevronLeft}
                    onClick={onPrevClicked}/>

                <div className="Carousel-block-container">
                    {blocks.length && blocks[activeBlockIndex]}
                </div>

                <NavButton disabled={!isNextAvailable}
                           className="Carousel-button Carousel-button-next"
                           icon={faChevronRight}
                           onClick={onNextClicked}/>

                <Indicators className="Carousel-indicators"
                            count={blocks.length}
                            activeIndex={activeBlockIndex}/>
            </div>
        </div>
    );
};

export default Carousel;
