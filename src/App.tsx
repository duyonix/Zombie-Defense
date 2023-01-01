import React from 'react';
import { useUnityContext } from 'react-unity-webgl';
import { Unity } from 'react-unity-webgl/distribution/components/unity-component';
import './App.css';

const App = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/unity-build-webgl.loader.js",
    dataUrl: "build/unity-build-webgl.data",
    frameworkUrl: "build/unity-build-webgl.framework.js",
    codeUrl: "build/unity-build-webgl.wasm",
  });

  const elementStyles = {
    height: '100vh',
    width: `${(16 / 9) * 100}vh`,
  };

  return (
    <div>
      <Unity style={elementStyles} unityProvider={unityProvider} />
    </div>
  );
}

export default App;
