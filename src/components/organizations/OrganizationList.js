import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Organization.css";

const OrganizationList = ({organizations}) => (
        
        organizations.map((organization) => {
            return(
                <div className="wrapper" key={organization.id}>
                    
                <Card style={{width: "18rem"}} key={organization.organation_id} className="box">
                    <Card.Title>{organization.organization}</Card.Title>
                    <Card.Subtitle>{organization.organization_name}</Card.Subtitle>
                </Card>
                
                
                </div>
            )
        })
           
);

OrganizationList.propTypes = {
    organizations: PropTypes.array.isRequired,
  };

export default OrganizationList;