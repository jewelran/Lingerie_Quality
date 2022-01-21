import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function useFetch(url) {
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null)
useEffect(() => {
    fetch(url)
    .then((res) => {
        if (!res.ok) {
            throw Error("fetching is not successful")
        }
        else{
            return res.json()
        }
    })
    .then((data) => {
        setData(data)
    //     setError(error.message);
    //     setIsLoading(false);
    })
},[url]);
return {data,error,isLoading}

} 

export default useFetch;
