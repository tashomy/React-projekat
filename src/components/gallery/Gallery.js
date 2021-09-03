import React from "react";
import first from "../../images/1.jpg";
import second from "../../images/2.jpg";
import third from "../../images/3.jpg";
import fourth from "../../images/4.jpg";
import fifth from "../../images/5.jpg";
import sixth from "../../images/6.jpg";
import Carousel from "react-bootstrap/Carousel";

const Gallery = () => {
  return (
    <div>
      <div className="gallery-container">
        <Carousel fade id="main-heading-without-margin-top">
          <Carousel.Item>
            <img className="d-block w-100" src={first} alt="First slide" />
            <Carousel.Caption>
              <h3 className="text-background">First slide label</h3>
              <p className="text-background">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={second} alt="Second slide" />

            <Carousel.Caption>
              <h3 className="text-background">Second slide label</h3>
              <p className="text-background">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={third} alt="Third slide" />

            <Carousel.Caption>
              <h3 className="text-background">Third slide label</h3>
              <p className="text-background">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fourth} alt="Fourth slide" />

            <Carousel.Caption>
              <h3 className="text-background">Fourth slide label</h3>
              <p className="text-background">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fifth} alt="fifth slide" />

            <Carousel.Caption>
              <h3 className="text-background">fifth slide label</h3>
              <p className="text-background">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sixth} alt="sixth slide" />

            <Carousel.Caption>
              <h3 className="text-background">sixth slide label</h3>
              <p className="text-background">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="gallery-description">
        <div className="image-item">
          <h3>Image 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="image-item">
          <h3>Image 2</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="image-item">
          <h3>Image 3</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="image-item">
          <h3>Image 4</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="image-item">
          <h3>Image 5</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="image-item">
          <h3>Image 6</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
