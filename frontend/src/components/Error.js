import React, { Component } from 'react';

class Error extends Component {

    render() {
        return (
            <div>
                <div className="error-heading">Error</div>
                {this.props.errno === '404' &&
                    <div className="error-detail">404 Page not found.</div>}
                {this.props.errno === '500' &&
                    <div className="error-detail">500 Internal server error.</div>}
            </div>

        )
    }
}

export default Error;