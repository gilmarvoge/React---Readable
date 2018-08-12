import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getAllCategories } from '../../actions/CategoriesActions'
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Readable</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/react'}>
              <NavItem>
                <Glyphicon glyph='briefcase' /> React
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/redux'}>
              <NavItem>
                <Glyphicon glyph='tasks' /> Redux
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/udacity'}>
              <NavItem>
                <Glyphicon glyph='globe' /> Udacity
              </NavItem>
            </LinkContainer>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


