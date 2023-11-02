import { useEffect, useState } from 'react';
import { SendTransaction } from './components/SendTransaction';

export default function Root(props) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const { eventEmitter } = props;

    eventEmitter.listenTransactionResult(({ transactions }) => {
      setTransactions(transactions);
    });
  }, []);

  return (
    <section>
      <SendTransaction {...props} />

      {transactions.map((transaction, index) => {
        return (
          <div
            key={index}
            style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
          >
            <p>Nonce: {transaction.nonce}</p>
            <p>Hash: {transaction.hash}</p>
            <p>Sender: {transaction.sender}</p>
            <p>Receiver: {transaction.receiver}</p>
          </div>
        );
      })}
    </section>
  );
}
