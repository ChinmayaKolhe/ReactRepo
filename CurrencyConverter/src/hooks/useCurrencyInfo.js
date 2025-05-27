import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.result === "success") {
                    setData(res.rates);
                } else {
                    console.error("API error:", res["error-type"]);
                    setData({});
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setData({});
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
