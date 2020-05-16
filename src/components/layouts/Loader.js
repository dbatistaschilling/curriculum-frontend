import React, { useState, useEffect } from 'react';


const Loader = () => {

    const [loader, setLoader] = useState({
        onStart: true
    })

    useEffect(() => {
        window.setTimeout(() => {
            setLoader({ onStart: false })
        }, 500)
    });

	return (
        <div className={loader.onStart ? "section-loader" : null}>
            <div className="loader">
                <div></div>
                <div></div> 
            </div>
        </div>
	);
};

export default Loader;


