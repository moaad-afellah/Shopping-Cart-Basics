import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../RTK/Slices/ProductSlice";

export default function Single_Product() {
  const [singleProduct, setSingleProduct] = useState({});
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch()
  const { id } = useParams();


  useEffect(() => {
    dispatch(fetchProducts())
    const foundProduct = products.find((product) => product.id == id);
    if (foundProduct) {
      setSingleProduct({...foundProduct});
    } else {
      setSingleProduct(null);
    }
  }, [products, id]);
  

  return (
    <div className="single-product">
      <Container>
        <div className="single-product__content py-5">
          <Row className=" align-items-center">
              {singleProduct ? <>
                <Col lg={6} className="mb-3 mb-lg-0">
                  <div className="single-product__content__image">
                    <img className="w-100" src={singleProduct.thumbnail} alt={singleProduct.title} />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="single-product__content__info">
                    <h1>
                      Title: <span className="text-primary">{singleProduct.title}</span>
                    </h1>
                    <h2>
                      Brand: {singleProduct.brand}
                    </h2>
                    <p className="">{singleProduct.description}</p>
                    <h6 className="fw-bold fs-4">Category:  {singleProduct.category}</h6>
                    <h6 className="fw-bold">
                      Price: <span className="text-danger">{singleProduct.price}$</span>
                    </h6>
                  </div>
                </Col>
                </>
                : <h1>Product Not Found</h1>
              }
          </Row>
        </div>
      </Container>
    </div>
  );
}