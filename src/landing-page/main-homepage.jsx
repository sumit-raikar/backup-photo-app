import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import './main-homepage.scss';
import useWindowSize from '../shared-resources/window-properties';


function MainHomepage() {

    //     const [newSpin, setNewSpin] = useState(keyframes`
    //     0% { transform: translate(${Math.random() * 100}%,${Math.random() * 100}%); }
    //     100% { transform: translate(${Math.random() * 100}%,${Math.random() * 100}%); }
    // `);
    // const [newSpin, setNewSpin] = useState(keyframes`
    //     0% { transform: translate(0%,0%); }
    //     100% { transform: translate(100%,100%); }
    // `);
    const parentElement = useRef(null);
    // const size = useWindowSize();

    useEffect(() => {
        console.log(parentElement.current.offsetWidth);
        console.log(parentElement.current.offsetHeight);
        // const spin = keyframes`
        //     0% { transform: translate(${size.height}px,${size.height}px); }
        //     100% { transform: translate(${size.width}px,${size.width}px); }
        // `
        // console.log('width', width);
    }, [parentElement.current]);

    // const Move = styled.div`
    // border: 16px solid #eee;
    // border-top: 16px solid #3ae;
    // border-radius: 50%;
    // width: 1cm;
    // height: 1cm;
    // animation: ${spin} 2s ease-out infinite;
    // `;

    return (
        <div ref={parentElement}></div>
    );
}

export default MainHomepage;