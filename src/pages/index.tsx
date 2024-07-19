import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { fetchStockData, selectStock, selectSymbol, setSymbol } from '../features/stockSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const stockData = useSelector(selectStock);
  const symbol = useSelector(selectSymbol);

  useEffect(() => {
    dispatch(fetchStockData(symbol));
    const interval = setInterval(() => {
      dispatch(fetchStockData(symbol));
    }, 5000);

    return () => clearInterval(interval);
  }, [symbol, dispatch]);

  const handleSymbolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSymbol(e.target.value));
  };

  return (
    <div>
      <h1>Real-Time Stock Data</h1>
      <select value={symbol} onChange={handleSymbolChange}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="USDT">USDT</option>
        <option value="BNB">BNB</option>
        <option value="SOL">SOL</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((entry) => (
            <tr key={entry._id}>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
              <td>{entry.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
