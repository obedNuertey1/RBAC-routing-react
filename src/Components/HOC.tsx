import React from 'react'

function HOC(ComponentUsed:any) {
  return class MyWrapper extends React.Component {
    constructor(props:any){
        super(props);
    }
    componentDidMount(): void {
        console.log(`Component ${ComponentUsed.name} rendered`);
    }
    render(){
        return <ComponentUsed {...this.props} />
    }
  }
}

export default HOC;