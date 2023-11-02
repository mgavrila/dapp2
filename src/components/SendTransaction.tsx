export const SendTransaction = ({ eventEmitter }) => {
  const onClick = () => {
    eventEmitter.emitTransaction({
      value: '1000000000000000000',
      data: 'transaction',
      receiver:
        'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex',
      sender: 'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex'
    });
  };

  return <button onClick={onClick}>Send Transaction</button>;
};
