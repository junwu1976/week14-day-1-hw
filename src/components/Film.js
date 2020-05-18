import React, {Component} from 'react';

class Film extends Component {

    render(){
        return (
            <>
            {/* children was the item between <Comment></Comment> is CommentList */}
            <li><a href={this.props.url}>{this.props.children}</a></li>
            </>
        )
    }
}

export default Film;