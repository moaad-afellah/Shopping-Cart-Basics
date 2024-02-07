import { Container, Row } from "react-bootstrap";
import { Product_List } from "../../Components/Product_List/Product_List";
import { Title_Page } from "../../Components/Title_Page/Title_Page";


export function Products() {
  return (
    <div className="products-page py-5">
      <Container>
        <Title_Page title={"Products Page"}/>
        <div className="products-page__content">
          <Row>
            <Product_List/>
          </Row>
        </div>
      </Container>
    </div>
  )
}
