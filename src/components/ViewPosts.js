import React, { Component } from 'react';
import Post from './Post';
import { getAllPosts } from '../actions/PostsActions'
import { getPostsByCategory } from '../actions/CategoriesActions'

import { connect } from 'react-redux'
import { PostsSorted } from '../utils/helpers';


class ViewPosts extends Component {
    state = {
        checkbox: 'date',
    };

    componentDidMount() {
        this.fetchPosts()
    }
    componentDidUpdate(prevPros, prevState) {
        const prevUrl = prevPros.match.url
        const { url } = this.props.match
        if (url !== prevUrl) {
            this.fetchPosts()
        }
    }

    fetchPosts() {
        const { url } = this.props.match
        if (url === "/") {
            this.props.getAllPosts()
        } else {
            this.props.getPostsByCategory(this.props.match.params.category)
        }
    }

    handleChange = event => {
        this.setState({ checkbox: event.target.value });
    };

    render() {
        const posts = this.props.posts
        const checkbox = this.state.checkbox
        console.log(`checkbox: ${this.state.checkbox}`)
        return (
            <div className='list-post-top'>
                <div className="alinhar-botao-radio">
                    <a href="/novo"><button className='post-botao-novo-post' type='botao-novo-post'>Novo Post</button></a>
                    <div className='radio-button'>
                        <label className="container-radio-button">Ordenar por:</label>
                        <label className="container-radio-button">Data
                                <input
                                type="radio"
                                name="radio"
                                value={'date'}
                                onChange={this.handleChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                        <label className="container-radio-button" >Votos
                             <input
                                type="radio"
                                name="radio"
                                value={'score'}
                                onChange={this.handleChange}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
                {PostsSorted(posts, checkbox).map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts,
});

export default connect(mapStateToProps, { getAllPosts, getPostsByCategory })(ViewPosts)

