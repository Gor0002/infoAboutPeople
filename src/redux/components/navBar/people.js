import React from 'react';
import Person from './person';

export default function People({data}) {
    // console.log(data);
return(
    <div>
        {data.map((elem, index) =>{
            return <div key={index} className="flexPerson"><Person  person= {elem} /> </div>
        })}

        {/* <div className="flexPerson"><Person /></div>
        <div className="flexPerson"><Person /></div>
        {JSON.stringify(data)} */}
    </div>
  )}
