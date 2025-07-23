import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAllFetchProducts } from "../../RTK/Slices/ProductSlice";
import {fetchProducts} from "../../api/products"
import { Title_Page } from "../../Components/Title_Page/Title_Page";
import { Slide_Carousel } from "../../Components/Slide_Carousel/Slide_Carousel";
import { Product_Card } from "../../Components/Product_Card/Product_Card";

export function Home() {
  const { products } = useSelector(state => state)
  let productsOffer = products.filter((item) => item.offer)
  let productsLatest = products.filter((item) => item.latest)
  const dispatch = useDispatch();
  let [statusFetchProducts, setStatusFetchProducts] = useState("idle");

  useEffect(() => {
    setStatusFetchProducts("fetching")
    fetchProducts().then((data) => {
      dispatch(addAllFetchProducts(data.products))
      setStatusFetchProducts("idle")
    });

  }, [])


  return (
    <div className="home py-5">
      <Container>
        <Slide_Carousel />
        <div className="home__content">
          {statusFetchProducts === "fetching" ? <div>Fetching products ...</div> : <> <Title_Page title={"Product Offer"} />
            <Row className="mb-5">
              {
                productsOffer.map((product) => {
                  return <Col lg={4} md={6} key={product.id}>
                    <Product_Card product={product} />
                  </Col>
                })
              }
            </Row>
            <Title_Page title={"Product Latest"} />
            <Row>
              {
                productsLatest.map((product) => {
                  return <Col lg={4} md={6} key={product.id}>
                    <Product_Card product={product} />
                  </Col>
                })
              }
            </Row></>}
        </div>
      </Container>
    </div>
  )
}

