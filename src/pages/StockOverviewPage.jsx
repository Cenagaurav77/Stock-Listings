import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"

export const StockOverview = () => {
    return (
        <>
        <h1>Stock Overview Page</h1>
        <AutoComplete />
        <StockList />        
        </>
    )
}