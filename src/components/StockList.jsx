import { useState, useEffect } from "react"
import axios from "axios";
import finnHub from "../apis/finnHub";

export const StockList = () => {
    const [stock, setStock] = useState([]);
    const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN']);

    useEffect( () => {
        let isMounted = true
        const fetchData = async () => {
            try{
                // const response = await finnHub.get("/quote?symbol=MSFT&token=cp4hm8hr01qnnlpbbft0cp4hm8hr01qnnlpbbftg");
                const responses = await Promise.all( watchList.map((element) => {
                    return finnHub.get("quote", {
                        params: {
                            symbol: element
                        }
                    })
                }))
                const data = responses.map((response) => {
                    return {
                        data: response.data,
                        symbol: response.config.params.symbol
                    }
                })
                console.log(data);
                if(isMounted){
                    setStock(data)
                }
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
        return () => {
            isMounted = false;
        };
    },[watchList]);
    return (
        <>
        <table className="table hover mt-5">
            <thead style={{color: "rgb(79,89,102)"}}>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Last</th>
                    <th scope="col">Chg</th>
                    <th scope="col">Chg%</th>
                    <th scope="col">High</th>
                    <th scope="col">Low</th>
                    <th scope="col">Open</th>
                    <th scope="col">Pclose</th>
                </tr>
            </thead>
            <tbody>
                {
                    stock.map( (stockData) => {
                        return(
                            <tr className="table-row" key={stockData.symbol}>
                                <th scope="row">{stockData.symbol}</th>
                                <td>{stockData.data.c}</td>
                                <td>{stockData.data.d}</td>
                                <td>{stockData.data.dp}</td>
                                <td>{stockData.data.h}</td>
                                <td>{stockData.data.l}</td>
                                <td>{stockData.data.o}</td>
                                <td>{stockData.data.pc}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}