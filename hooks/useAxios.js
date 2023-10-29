import { useState } from 'react';
import { axios } from "../lib/axios";

const useAxios = ({ url, method = 'get', headers = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(false);

    const fetchData = ({ body = null }) => {
        axios[method](url, body, { headers })
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    return { response, error, fetchData, loading };
};

export default useAxios;
