import React from 'react';

export default function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        callback(event);
      }
    }
    // add event listener for escape key keydown
    window.addEventListener('keydown', handleKeyDown);

    // remove event listener on cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, callback]);
}
