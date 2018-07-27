import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Layout } from '../components/Layout';
import ViewCriarEditarPost from './ViewCriarEditarPost';

import ViewDetalhePostagens from './ViewDetalhePostagens';
import ViewPosts from './ViewPosts';


export default class App extends Component {
  

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    return (
      <Layout>
      <div className="app">
        <div className='container'>
          <h1 className='header'>Readable</h1>
          <Route exact path='/' component={ViewPosts} />
          <Route path='/:category/:postId/editar' component={ViewCriarEditarPost} />
          <Route path="/novo" component={ViewCriarEditarPost} />
          <Route exact path="/:category/:postId" component={ViewDetalhePostagens} />
        </div>
      </div>
      </Layout>

    )
  }
}


