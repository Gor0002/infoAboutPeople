import React from 'react';
import { connect } from 'react-redux';

function FixedPage({data, activePerson, loader}) {
  console.log(activePerson);
  const forExFixedPage = {...data[0]}
  const {name, username, email, company} = forExFixedPage;
  // address.city !== undefined && console.log(address.city);
  
  return(
    <div className="fixed">
      <div className="fixedPerson">
        {activePerson === null ? 
        <>
            <div className="fixedName">{name}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            {/* <div>Company: {company.name}</div> */}
        </> : 
        <>
            <div className="fixedName">{activePerson.name}</div>
            <div>Name: {activePerson.name}</div>
            <div>Username: {activePerson.username}</div>
            <div>Email: {activePerson.email}</div>
            <div>Company: {activePerson.company.name}</div>
        </>
        }
      </div>
    </div>
  )}

const mapStateToProps = (state) => ({
  data:state.data,
  activePerson:state.activePerson, 
  loader: state.loader
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(FixedPage)