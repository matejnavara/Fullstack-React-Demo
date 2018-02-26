import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';


class VendorListItem extends Component {

    render(){

        let bests = this.props.vendor.best_for.map(best_for =>
            <li>{best_for}</li>
        );

        return(
            <Row className="Vendor-row">
                {/* <img className='Vendor-bg' src={require(this.props.vendor.image)}/> */}
                <Col xs={12} md={6} className={(this.props.vendor.id%2 ? 'pull-right': 'pull-left')}>
                    <h1>{this.props.vendor.name}</h1>
                    <h3>{this.props.vendor.desc}</h3>
                    <hr/>
                    <h3>Best For</h3>
                    {bests}
                    <hr/>
                    <h3>Feedr Recommends</h3>
                    <p>{this.props.vendor.recommend}</p>
                    <Button>Order from vendor</Button>
                </Col>
            </Row>
        );
        
    }
}

export default VendorListItem;