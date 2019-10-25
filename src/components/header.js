
import PropTypes from 'prop-types'
import React from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
            <NavbarBrand href="https://webnow.site/"> {this.props.siteTitle} </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/"> <strong> Home </strong>  </NavLink> 
                </NavItem>
                <NavItem>
                  <NavLink href="/team"> <strong> Posts </strong>  </NavLink>  
                </NavItem>
                <NavItem>
                  <NavLink href="/tags"> <strong> Tags </strong>  </NavLink> 
                </NavItem>
                <NavItem>
                  <NavLink href="/about"> <strong> Contato </strong>  </NavLink> 
                </NavItem>
                {/*<NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>*/}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
