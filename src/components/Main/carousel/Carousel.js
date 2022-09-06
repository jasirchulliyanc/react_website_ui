import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselItems =() =>{
    return (
        // eslint-disable-next-line react/style-prop-object
        <section className="carousel-section">
      <Carousel>
          <div>
                  <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt=""/>
          </div>
          <div>
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt=""/>
          </div>
          <div>
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt=""/>
          </div>
      </Carousel>
</section>
    );
}
export default CarouselItems