import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    convertDateToCommentDateFormat(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }


    renderComments(comments) {
        if (comments != null) {
            const renderedComments = comments.map((comment) => {
                return (
                    <li>
                        <p>{ comment.comment }</p>
                        <p>-- { comment.author }, { this.convertDateToCommentDateFormat(comment.date) }</p>
                    </li>
                );
            });
    
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        { renderedComments }
                    </ul>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
        
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;