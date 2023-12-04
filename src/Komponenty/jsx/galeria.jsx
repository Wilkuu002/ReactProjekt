import React, { useState } from "react";
import '../css/galeriacss.css';
import '../css/chmurkascss.css'

const Galeria = () => {
    const obrazy = [
        { src: '/zdjecia/zdjecie1.jpg', title: 'Pierwszy obrazek', description: 'Opis pierwszego obrazka' },
        { src: '/zdjecia/zdjecie2.jpg', title: 'Drugi obrazek', description: 'Opis drugiego obrazka' },
        { src: '/zdjecia/zdjecie3.jpg', title: 'Trzeci obrazek', description: 'Opis trzeciego obrazka' },
        { src: '/zdjecia/zdjecie4.jpg', title: 'Czwarty obrazek', description: 'Opis czwartego obrazka' },
        { src: '/zdjecia/zdjecie5.jpg', title: 'Piąty obrazek', description: 'Opis piątego obrazka' },
        { src: '/zdjecia/zdjecie6.jpg', title: 'Szósty obrazek', description: 'Opis szóstego obrazka' },
        { src: '/zdjecia/zdjecie7.jpg', title: 'Siódmy obrazek', description: 'Opis siódmego obrazka' },
    ];

    const [hoveredInfo, setHoveredInfo] = useState(null);

    const handleImageHover = (index) => {
        setHoveredInfo(index);
    };

    const handleImageLeave = () => {
        setHoveredInfo(null);
    }

    return (
        <div className="galeria">
            {obrazy.map((image, index) => (
                <div
                    key={index+1}
                    className="image-container"

                    onMouseEnter={() => handleImageHover(index)}// Przekazanie indeksu obrazka
                    onMouseLeave={handleImageLeave}
                >
                    <img src={image.src} alt={image.title} />
                    {hoveredInfo === index && (
                        <div className="image-info">
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Galeria;