import React from 'react'
import oops from './oops.png'

class ErrorBoundary extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          hasError: false,
      }
  }

  static getDerivedStateFromError () {
      return { hasError: true }
  }

  componentDidCatch(error, info) {
    debugger
    /* You can also change the `hasError` state to this method also
          this.setState({hasError: true})
     /* no need to use `getDerivedStateFromError */
      /* This information will be send into error reporting service */
    /* this.props.customErrorReportingService(error, info) */
  }

  render () {
    if(this.state.hasError) {
        return (
            <div style={{
                display: "block",
                width: "200px",
                float: "left",
                height: "200px",
                border: "2px solid lightblue",
                padding: "10px",
                margin: "10px"
            }}>
                <div><img src={oops} 
                style={{
                    width: '200px', 
                    height: '180px'
                }}
                alt={'!error'}
                     /></div>
                <div style={{ 
                   width: '200px', 
                   wordBreak: 'break-word'
                 }}>Something went wrong</div>
            </div>
        )
    } else {
        return this.props.children;
    }
  }
}

export default ErrorBoundary;