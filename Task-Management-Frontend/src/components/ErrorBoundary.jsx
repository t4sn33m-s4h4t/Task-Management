import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleTryAgain = () => {
    setHasError(false);
  };

  const handleError = (error, errorInfo) => {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="p-4 text-center">
        <h2>Something went wrong.</h2>
        <button
          onClick={handleTryAgain}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <React.Fragment>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          onError: handleError,  
        })
      )}
    </React.Fragment>
  );
};

export default ErrorBoundary;