import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import VendorListItem from './VendorListItem';

class VendorList extends Component {

    render(){
        let listVendors = this.props.vendors.map(vendor =>
            <VendorListItem key={vendor.id} vendor={vendor} />
        );

        return(
            <Grid>
                {listVendors}
            </Grid>
        );
    }
}

export default VendorList;