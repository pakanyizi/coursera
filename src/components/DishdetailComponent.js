import React from 'react'
import { Card, CardImg,  CardText, CardBody,
    CardTitle } from 'reactstrap';

const RenderDish = ({dish}) => {
    if (dish!= null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}
                      </CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
}

const RenderComments = ({comment}) => {
    if (comment!= null)
            return(
                <ul className='list-unstyled'>
                     {comment.comments.map((comment)=> <li key={comment.id}>{comment.comment} <br></br>
            <p>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </li>)}

                </ul>
            );
        else
            return(
                <div></div>
            );
}







const DishdetailComponent = (props) => {

    console.log(props.comments)
    return (
        <div className="container">
        <div className='row'>
         <div  className="col-12 col-md-5 m-1 food-detail">
         <RenderDish dish={props.dish}/>
        </div>
        <div  className="col-12 col-md-5 m-1 food-detail">
        <h4>comments</h4>
        <RenderComments comment={props.dish}/>
        </div>
        </div>
      </div>

    )
}



export default DishdetailComponent
