import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDescription = (props) => {
  console.log(props, 'props in product description');
  let allFeatures = [];
  let productFeatures = () => {
    for (let key in props.details.features) {
      let feature = props.details.features[key]["feature"];
      let value = props.details.features[key]["value"];
      allFeatures.push({feature, value})
    }
    console.log(allFeatures, 'all features');
    return allFeatures.map((item, index) => {
      return (
        <div className="feature" key={index}>
          <p>
            <i className="fa fa-check" aria-hidden="true">
            </i> {item.feature}: {item.value}
          </p>
        </div>
      );
    })
  }

  // if (props.details.features) {
  //   productFeatures();    
  // }

  return (
    <Row className="productDescription">

      <Col className="description-body" sm={8} >
        {!props.details
          ? <p>Loading</p>
          : <React.Fragment>
              <h4>{props.details.slogan}</h4>
              <p>{props.details.description}</p>
            </React.Fragment>
        }
      </Col>
      <Col sm={4}>
        { !props.details
            ? <p>Loading</p>
            : productFeatures()
        }
      </Col>
    </Row>
  );
};

export default ProductDescription;