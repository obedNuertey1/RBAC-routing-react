import React from 'react'
import HOC from './HOC';

function DashboardComponent() {
  return (
    <>
        <h1>DashboardComponent</h1>
    </>
  )
}

const ModifiedComponent = HOC(DashboardComponent);

export default ModifiedComponent;