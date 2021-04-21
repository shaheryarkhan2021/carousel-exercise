import React from 'react';
import './App.css';

import Carousel from './components/carousel/Carousel';
import './components/carousel/Carousel.css';

const carouselSrc = [
    {
        title: "First Block",
        images: ["https://dummyimage.com/600x300/D44E99/fff", "https://dummyimage.com/600x300/D99E99/fff"]
    },
    {
        title: "Second Block",
        images: ["https://dummyimage.com/600x300/D11E11/333", "https://dummyimage.com/600x300/D66E11/666"]
    },
    {
        title: "Third Block",
        images: ["https://dummyimage.com/600x300/A44C44/fff", "https://dummyimage.com/600x300/AFFC44/999"]
    },
    {
        title: "Fourth Block",
        images: ["https://dummyimage.com/600x300/A48884/D44E99", "https://dummyimage.com/600x300/A41114/D3D9D1"]
    }
];

function App() {

    const getRandomUrl = (images) => {
        const randIndex = Math.floor(Math.random() * images.length);
        return images[randIndex];
    };

    return (
        <div className="App">

            <Carousel>
                {
                    carouselSrc.map((item, i) =>
                        <div key={i} className="Carousel-block">
                            <img src={getRandomUrl(item.images)} alt={item.title}/>
                            <b className="Carousel-block-title">{item.title}</b>
                        </div>
                    )
                }

            </Carousel>

        </div>
    );
}

export default App;
