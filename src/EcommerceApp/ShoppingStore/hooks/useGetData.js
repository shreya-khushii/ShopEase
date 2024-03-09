import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await axios.get(
                "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
            );
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error || "Opps Somthing went wrong");
        }
    };
    useEffect(() => {
        getData();
    }, []);

    return {
        data,
        loading,
    };
};
export default useGetData;
