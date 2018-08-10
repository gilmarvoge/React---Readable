import React, { Component } from 'react';
import Post from './Post';
import { getAllPosts } from '../actions/PostsActions'
import { connect } from 'react-redux'
import { PostsSorted } from '../utils/helpers';

class ViewPosts extends Component {
    state = {
        checkbox: 'date',
    };

    handleChange = event => {
        this.setState({ checkbox: event.target.value });
    };


    componentDidMount() {
        this.props.getAllPosts()
    }

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
    posts
});

export default connect(mapStateToProps, { getAllPosts })(ViewPosts)

