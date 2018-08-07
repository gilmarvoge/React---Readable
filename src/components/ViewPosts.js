import React, { Component } from 'react';
import Posts from './Posts';
import { getAllPosts } from '../actions/PostsActions'
import { connect } from 'react-redux'

class ViewPosts extends Component {

    componentDidMount() {
        this.props.getAllPosts()
    }

    render() {
        const posts = this.props.posts
        return (
            <div className='list-post-top'>
                <div className="alinhar-botao-radio">
                    <a href="/novo"><button className='post-botao-novo-post' type='botao-novo-post'>Novo Post</button></a>
                    <div className='radio-button'>
                        <label className="container-radio-button">Ordenar por:</label>
                        <label className="container-radio-button">Data
                <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container-radio-button">Votos
                 <input type="radio" name="radio" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                {posts.map((post) => (
                <Posts key={post.id} post={post} />
                  ))}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAllPosts: () => dispatch(getAllPosts())
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewPosts)

