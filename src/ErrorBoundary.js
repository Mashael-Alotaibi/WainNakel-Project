import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false,
        }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true,
        }
    }
    render(){
        const style={
            backgroundColor: 'beige',
            textAlign:'center'
        }
        if (this.state.hasError){
            return <div style={style}><h1>..Something went wrong</h1>
                <h1>try again later</h1>
             </div> 
        }
        return this.props.children
        
        }
}

export default ErrorBoundary;