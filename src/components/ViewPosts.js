import React, { Component } from 'react';
import Posts from './Posts';
import { getAllPosts } from '../actions/PostsActions'
import { connect } from 'react-redux'

class ViewPosts extends Component {

    componentDidMount() {
        this.props.getAllPosts()

    }

    render() {
    
        return (
            <div className='list-post-top'>
                <div className="alinhar-botao-radio">
                    <a href="/novo"><button class='post-botao-novo-post' type='botao-novo-post'>Novo Post</button></a>
                    <div className='radio-button'>
                        <label class="container-radio-button">Ordenar por:</label>
                        <label class="container-radio-button">Data
                <input type="radio" name="radio" />
                            <span class="checkmark"></span>
                        </label>
                        <label class="container-radio-button">Votos
                 <input type="radio" name="radio" />
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <Posts posts={this.props.posts} />
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

