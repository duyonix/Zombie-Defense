import React, { Fragment } from "react";
import { useUnityContext } from "react-unity-webgl";
import { Unity } from "react-unity-webgl/distribution/components/unity-component";
import "./App.css";

const App = () => {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "build/unity-build-webgl.loader.js",
    dataUrl: "build/unity-build-webgl.data",
    frameworkUrl: "build/unity-build-webgl.framework.js",
    codeUrl: "build/unity-build-webgl.wasm",
  });

  const elementStyles = {
    height: "100vh",
    width: `${(16 / 9) * 100}vh`,
  };

  return (
    <Fragment>
      {!isLoaded && (
        <div className="wrapper-loading">
          <div className="boxes">
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}

      <div className="wrapper">
        <Unity
          unityProvider={unityProvider}
          style={{
            visibility: isLoaded ? "visible" : "hidden",
            ...elementStyles,
          }}
        />
      </div>
    </Fragment>
  );
};

export default App;
