import React from 'react';
import { Card, CardImg, CardText,CardBody ,CardTitle, CardSubtitle } from "reactstrap";

const RenderCard = ({item}) => {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation?<CardSubtitle>{item.designation}</CardSubtitle>:null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
     );
}



const Home = (props) => {
    return (
        <div className='container'>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                {/* show featured dish */}
                <RenderCard item={props.dish}/>
                </div>
                {/* show featured promotion */}
                 <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion}/>
                </div>
                {/* show featured leader */}
                <div className="col-12 col-md m-1">
                <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
};

export default Home;