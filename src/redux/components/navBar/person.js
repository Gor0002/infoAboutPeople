import React from 'react';
import Button from "@mui/material/Button";
import { connect } from 'react-redux';
import { setActiveUser } from '../../AC';

function Person({person, handleActiveUser}) {
    const {name, email, phone} = person
    return (
    <div className="person">
        <div className="name">{name}</div>
        <div>email: {email}</div>
        <div>phone: {phone}</div>
        <Button variant="contained" onClick={() => handleActiveUser(person)}>Click to Wiew Details</Button>
    </div>
  );
}
const mapStateToProps = (state) => ({
    
  });

const mapDispatchToProps = {
    handleActiveUser: setActiveUser
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Person)