export const SendTransaction = ({ eventEmitter }) => {
  const onClick = () => {
    eventEmitter.emit({
      type: 'transaction',
      data: {
        value: '1000000000000000000',
        data: 'transaction',
        receiver:
          'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex',
        sender: 'erd1wh9c0sjr2xn8hzf02lwwcr4jk2s84tat9ud2kaq6zr7xzpvl9l5q8awmex'
      }
    });
  };

  return (
    <button
      onClick={onClick}
      className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 bg-blue-600 text-white hover:bg-blue-700 ml-2 mr-0'
    >
      Send Transaction
    </button>
  );
};
