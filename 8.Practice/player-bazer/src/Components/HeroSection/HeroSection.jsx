import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const images = [
        'https://i.ibb.co/Js78PRF/Hero-Section.jpg',
        'https://i.ibb.co/BZtsRdg/Hero2.webp',
        'https://i.ibb.co/4gGfcgR/hero5.jpg',
        'https://i.ibb.co/y4dYXSg/10-cristiano-ronaldo-football-hd-wallpapers.jpg',
        'https://i.ibb.co/dBKYthX/football-players-expression-hd-football.jpg',
        'https://i.ibb.co/7KNM2KM/soccer-player-man-human-person-sport.jpg',
        'https://i.ibb.co/88kq2pQ/soccer-lionel-messi-fc-barcelona-wallpaper-preview.jpg'
    ];

    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div>
            <section className="slider">
                <img
                    className='w-full'
                    id="image_slider"
                    src={images[imgIndex]}
                    alt={`Slide ${imgIndex}`}
                />
            </section>
        </div>
    );
};

export default HeroSection;
