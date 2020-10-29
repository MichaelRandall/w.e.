import React from "react";
import PropTypes from "prop-types";
import { Card, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const OrganizationList = ({organizations}) => (
    <CardDeck>
        {organizations.map((organization) => {
            return(
                <Card key={organization.organization_id} style={{ width: '22rem' }}>
                    {/* <Card.Header as="h5">{organization.organization}</Card.Header> */}
                    <Card.Body>
                        <Card.Title>{organization.organization}</Card.Title>
                        <Card.Text>{organization.organization_name}</Card.Text>
                    </Card.Body>
                </Card>
            )
        })};
    </CardDeck>  
);

OrganizationList.propTypes = {
    organizations: PropTypes.array.isRequired,
  };

export default OrganizationList;