import React, { useEffect } from 'react';
import HOC from './HOC';

function AdminComponent() {
  return (
    <>
        <h1>AdminComponent</h1>
    </>
  )
}

const ModifiedComponent = HOC(AdminComponent);

export default ModifiedComponent;