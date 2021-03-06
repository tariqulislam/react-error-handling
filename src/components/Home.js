import React, {Component} from 'react'
class Home extends Component {
   constructor(props) {
       super(props);
       this.state = {
           hasError: false,
           error: null,
           errorInfo: null
       }
   }

   static getDerivedStateFromError() {
       return {hasError: true}
   }

   componentDidCatch(error, info) {
       this.setState({ error: error, errorInfo:info})
   }

   render () {
      
      if(this.state.hasError) {
          return <div style={{
              border: '1px solid red',
              padding:'10px',
              margin: '10px', 
              color: 'red'}}>
                Sorry,Something went wrong!
              </div>
      }
      return (  
          <div>
             <TestElement {...this.props} />
          </div>
      )
   }
}

export const TestElement = (props) => {
  return (
    <div>{props.name.toString()}</div>
  )
}

export default Home