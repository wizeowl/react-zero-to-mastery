import React, { Component } from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends Component {
  state = { hasErrored: false };

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if(this.state.hasErrored){
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/lKJiT77.png'}/>
          <ErrorImageText>Where did the page go? I don't know!</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
