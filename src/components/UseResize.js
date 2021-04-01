import React,{useState, useEffect, useCallback} from 'react'

const UseResize = (myRef) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const handleResize = useCallback(() => {
        setWidth(myRef.current.offsetWidth);
        setHeight(myRef.current.offsetHeight);
    }, [myRef]);

    useEffect(() => {
            myRef.current && myRef.current.addEventListener('resize', 
            handleResize());
            return()=>{
                myRef.current && myRef.current.removeEventListener('resize', 
            handleResize());
            }
    }, [myRef]);

    return { width, height };
}

export default UseResize
