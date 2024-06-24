import React from 'react'
import HOC from './HOC';

function LoginComponent() {
  return (
    <>
        <h1>LoginComponent</h1>
    </>
  )
}

const ModifiedComponent = HOC(LoginComponent);

export default ModifiedComponent;