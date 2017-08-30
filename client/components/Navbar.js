import React from 'react';
import NameEntry from './NameEntry';
import {connect} from 'react-redux'


function Navbar(props) {
  console.log(props)
  return (
    <nav>
      <h3>{props.currentChannel}</h3>
      <NameEntry />
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    currentChannel: state.currentChannel
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
