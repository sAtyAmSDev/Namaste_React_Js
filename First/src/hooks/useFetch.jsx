import React, { useEffect, useState } from 'react'

function useFetch(endpoint) {
    const API_URl = `https://vedicscriptures.github.io/${endpoint}`
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(API_URl).then((res) => {
            if (res.ok) {
                setLoading(true)
                res.json().then((data) => {
                    console.log(data);
                    
                    setData(data)
                    setLoading(false)
                })
            } else {
                setError(true)
            }
        }).catch((err) => {
            setLoading(false)
            setError(true)
        })
    }, [endpoint])

    custom
    
    return { data, loading, error }
}

export default useFetch