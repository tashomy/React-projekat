import React from 'react';
import first from '../../images/1.jpg';
import second from '../../images/2.jpg';
import third from '../../images/3.jpg';
import fourth from '../../images/4.jpg';
import fifth from '../../images/5.jpg';
import sixth from '../../images/6.jpg';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {
    return (
        <div className="gallery-container">
        
        <Carousel fade id="main-heading-without-margin-top">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={first}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 className="text-background">First slide label</h3>
                <p className="text-background">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={second}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 className="text-background">Second slide label</h3>
                <p className="text-background">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={third}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 className="text-background">Third slide label</h3>
                <p className="text-background">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={fourth}
                alt="Fourth slide"
                />

                <Carousel.Caption>
                <h3 className="text-background">Fourth slide label</h3>
                <p className="text-background">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={fifth}
                alt="fifth slide"
                />

                <Carousel.Caption>
                <h3 className="text-background">fifth slide label</h3>
                <p className="text-background">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sixth}
                alt="sixth slide"
                />

                <Carousel.Caption>
                <h3 className="text-background">sixth slide label</h3>
                <p className="text-background">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default Gallery;