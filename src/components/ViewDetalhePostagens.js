import React, { Component } from 'react';
import Comments from './Comments';
import { connect } from 'react-redux';
import { getPostById } from '../actions/PostsActions'
import { getCommentsById } from '../actions/CommentsActions'
import { adicionaComment } from '../actions/CommentsActions'
import ViewModalCriarEditarComment from './ViewCriarComment'
import PostDetails from '../components/PostDetails'
import { Redirect } from 'react-router-dom';

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

    render() {
        const post = this.props.post
        const comments = this.props.comments

        if (post.err) {
            return <Redirect to="/404/PostNotFound" />;
        }

        return (
            <div>
                <PostDetails post={post} />
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
