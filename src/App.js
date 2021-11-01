import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import Dropzone from './components/Dropzone/Dropzone';
import Viewer from './components/Viewer/Viewer';
import './App.css';

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: '/files/Newsletter.pdf',
      },
      viewer.current,
    ).then((instance) => {
      // const { docViewer, Annotations } = instance;
      // const annotManager = docViewer.getAnnotationManager();


    });
  }, []);

  return (
    <div className="App">
      <Dropzone />
      <Viewer docToLoad='/files/PDFTRON_about.pdf' />
      <Viewer docToLoad='/files/Newsletter.docx' />
    </div>
  );
};

export default App;
