import { useState, useEffect } from 'react';
import API from "../utils/apiCall";

const UseFetchData = () => {
    const [listData, setListData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await API.get("/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false");
                setListData(response.data)
            } catch (error) {
                console.log("Failed to fetch data", error);
            }
        })();
    }, []);
    return { listData }
};

export default UseFetchData;