import React, { Component } from 'react';
import ViewComments from './ViewComments';
import Comments from './Comments';
import { connect } from 'react-redux';
import { getPostById } from '../actions/PostsActions'
import { getCommentsById } from '../actions/CommentsActions'
import { adicionaComment } from '../actions/CommentsActions'
import ViewModalCriarEditarComment from './ViewModalCriarComment'
import Posts from '../components/Posts'

class ViewDetalhePostagens extends Component {

    componentDidMount() {
        this.props.getPostById(this.props.match.params.postId);
        this.props.getCommentsById(this.props.match.params.postId);

    }

    addCommentHandler = comment => {
        comment.parentId = this.props.match.params.postId;
        this.props.adicionaComment(comment);
    };

    /**  
     
      e.preventDefault();
      if (this.state.edit) {
         const { author, body } = this.state;
         this.props.editCommentById({
             id: this.props.comment.id,
             author,
             body,
        });
     } else {
         const { author, body } = this.state;
         this.props.adicionaComment({
             parentId: this.props.post_id,      
             author,
             body,
          });
      } */


    render() {

        const post = this.props.post
        const comments = this.props.comments
        return (
            <div>
                <Posts post={post} />
                <ViewModalCriarEditarComment addComment={this.addCommentHandler} />
                {comments.map((comment) => (
                    <Comments key={comment.id} comment={comment}/>
                ))}
            </div>


        )
    }
}


const mapStateToProps = ({ post, comments }) => ({
    post,
    comments,

});


export default connect(mapStateToProps, { getPostById, getCommentsById, adicionaComment })(ViewDetalhePostagens);
