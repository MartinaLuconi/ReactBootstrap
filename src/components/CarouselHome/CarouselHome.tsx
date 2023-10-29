import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return(
        <>
        <Carousel>
      <Carousel.Item>
       <img src="src\assets\Images\conjunto-jeans-moda-mujer-sueter_169016-3214.jpg"
       alt="First slide"></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="src\assets\Images\depositphotos_141182010-stock-photo-modern-casual-clothes.jpg"
         alt="Second slide"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="src\assets\Images\images.jpg"
       alt="Third slide"> </img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

        </>
    )
}


export default CarouselHome;