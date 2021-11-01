import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

export default function Holder() {


    const viewer = useRef(null);

    // if using a class, equivalent of componentDidMount 
    useEffect(() => {
        WebViewer(
            {
                path: '/webviewer/lib',
                initialDoc: '/files/PDFTRON_about.pdf',
            },
            viewer.current,
        ).then((instance) => {
            console.log(instance)
            const { docViewer, Annotations } = instance;

        });
    }, []);



    return (
        <div>
            <div className="webviewer" ref={viewer}></div>
        </div>
    )
}
