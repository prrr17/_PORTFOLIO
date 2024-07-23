import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Load the Botpress inject script
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Load the Botpress config script
    const configScript = document.createElement('script');
    configScript.src =
      'https://mediafiles.botpress.cloud/ab51a62c-867b-48ea-af0b-58bb9a036be4/webchat/config.js';
    configScript.defer = true;
    document.body.appendChild(configScript);

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return <div id='webchat' />;
};

export default Chatbot;
