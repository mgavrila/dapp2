import { useEffect, useState } from 'react';
import { SendTransaction } from './components/SendTransaction';
import { Card } from '@amg/styleguide';

export default function Root(props) {
  const [transactions, setTransactions] = useState([]);
  const { eventEmitter } = props;

  useEffect(() => {
    eventEmitter.listen((payload) => {
      if (payload.type === 'result') {
        setTransactions(payload.data);
      }
    });
  }, []);

  return (
    <section>
      <div
        className='flex justify-center'
        style={{ height: 'calc(100vh - 120px)' }}
      >
        <Card className='max-w-7xl h-full'>
          <div className='flex flex-col justify-center items-center text-gray-700 gap-2'>
            <h1>Welcome to dapp2</h1>
            <SendTransaction {...props} />
          </div>
          {transactions.map((transaction, index) => {
            return (
              <div key={index} className='flex flex-col gap-1'>
                <p>Nonce: {transaction.nonce}</p>
                <p>Hash: {transaction.hash}</p>
                <p>Sender: {transaction.sender}</p>
                <p>Receiver: {transaction.receiver}</p>
              </div>
            );
          })}
        </Card>
      </div>
    </section>
  );
}
