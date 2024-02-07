import { Carousel } from "react-bootstrap";
import "./Slide_Carousel.css"
import img_1 from "../../assets/images/carousel/Carousel-1.jpg"
import img_2 from "../../assets/images/carousel/Carousel-2.jpg"
import img_3 from "../../assets/images/carousel/Carousel-3.jpg"

console.log(img_1);

export function Slide_Carousel() {
  return (
    <Carousel className="carousel position-relative mb-5">
      <Carousel.Item className="carousel__item">
        <img src={img_1} alt="" />
      </Carousel.Item>
      <Carousel.Item className="carousel__item">
        <img src={img_2} alt="" />
      </Carousel.Item>
      <Carousel.Item className="carousel__item">
        <img src={img_3} alt="" />
      </Carousel.Item>
    </Carousel>
  )
}
