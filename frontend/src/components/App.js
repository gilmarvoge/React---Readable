import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout } from '../components/Layout';
import ViewCriarEditarPost from './ViewCriarEditarPost';
import ViewDetalhePostagens from './ViewDetalhePostagens';
import ViewPosts from './ViewPosts';
import View404 from './View404'

export default class App extends Component {

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    return (
      <Switch>
        <Layout>
          <div className="app">
            <div className='container'>
              <h1 className='header'>Readable</h1>
              <Route exact path='/' component={ViewPosts} />
              <Route exact path="/:category" component={ViewPosts} />
              <Route exact path="/novo" component={ViewCriarEditarPost} />
              <Route exact path='/:category/:postId/editar' component={ViewCriarEditarPost} />
              <Route exact path="/:category/:postId" component={ViewDetalhePostagens} />
              <Route exact path="/404/PostNotFound" component={View404} />
            </div>
          </div>
        </Layout>
      </ Switch>
    )
  }
}


