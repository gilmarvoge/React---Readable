
import React, { Component } from 'react';

import { connect } from 'react-redux'
import Comments from '../components/Comments'



class ViewComments extends Component {

    componentDidMount() {
       
    }
    
    render() {

        return (
            <div >
                <Comments comments={this.props.comments} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments,
    }
}


export default connect(mapStateToProps)(ViewComments)

