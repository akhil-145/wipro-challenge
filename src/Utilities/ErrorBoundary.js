import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        console.log("akhil");
    }

    render() {
        if(this.state.hasError) {
            <div className="info-text">Please provide valid country code and hit submit button Error</div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
