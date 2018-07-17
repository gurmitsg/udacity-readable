import React, { Component } from 'react';
import FAThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import FAThumbsDown from 'react-icons/lib/fa/thumbs-o-down';


class Vote extends Component {

    render() {
        return (
            <div className="post-comment-vote">
                <button name="down" onClick={this.props.voteDown}>
                    <FAThumbsDown />
                </button>
                {this.props.voteScore} votes
                <button name="up" onClick={this.props.voteUp}>
                    <FAThumbsUp />
                </button>
            </div>
        )
    }
}


export default Vote;

