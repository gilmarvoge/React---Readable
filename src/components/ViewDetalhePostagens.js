import React, { Component } from 'react';
import ViewComments from './ViewComments';
import Comments from './Comments';
import { connect } from 'react-redux';
import { getPostById } from '../actions/PostsActions'
import { getCommentsById } from '../actions/CommentsActions'
import { adicionaComment } from '../actions/CommentsActions'
import ViewModalCriarEditarComment from './ViewModalCriarEditarComment'
import Post from '../components/Post'

class ViewDetalhePostagens extends Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

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
        this.props.children

        const post = this.props.post
        const comments = this.props.comments
        return (
            <div>
                <Post post={post} />
                <button onClick={this.toggleModal} type="botao-novo-comment" className="comment-botao-novo-comment" >
                    Novo Comentário
                </button>
                <ViewModalCriarEditarComment show={this.state.isOpen}
                    onClose={this.toggleModal}
                    addComment={this.addCommentHandler}
                />


                {comments.map((comment) => (
                    <Comments key={comment.id} comment={comment} />
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
