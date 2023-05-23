import React from 'react';

interface LoadingIndicatorProps {
  isLoading: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ isLoading }) => {
  return isLoading ? <div>Loading ...</div> : null;
}

export default LoadingIndicator;
