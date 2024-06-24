import React from 'react'
import HOC from './HOC';

function NotFoundComponent() {
  return (
    <React.Fragment>
        <h1 style={{"textAlign": "center", fontWeight: "bolder", color: "red"}}>Page Not Found</h1>
    </React.Fragment>
  )
}

const ModifiedComponent = HOC(NotFoundComponent);

export default ModifiedComponent;