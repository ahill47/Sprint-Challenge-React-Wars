import React from "react";

import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row
} from 'reactstrap'

const StarWarsCard = props => {
    return (
        <Card body style={{ backgroundColor: 'white', borderColor: 'white', width:'30%', border:"1px solid black", margin:"0 auto", borderRadius:"30px" , marginBottom:"5%"}} className="card">
            <CardBody>
                <CardTitle style={{fontSize:'24px'}}> Name: {props.name}</CardTitle>
                <CardText>Birth Year:{props.birthYear}</CardText>
                <CardText>Gender: {props.gender}</CardText>
                {/* <CardText>Skin Color: {props.skinColor}</CardText> */}
                <CardText>Hair Color: {props.hairColor}</CardText>
                <CardText>Height: {props.height}</CardText>
                
            </CardBody>
        </Card>
    )
}

export default StarWarsCard;