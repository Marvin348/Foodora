const Counter = ({ onDecreade, onIncrease, value }) => {
  return (
    <div className="flex items-center gap-2">
      <button className="bg-gray-200 w-8 h-8 border-0 rounded-full font-semibold cursor-pointer" onClick={onIncrease}>
        +
      </button>
      <p className="counter__quantity">{value}</p>
      <button className="bg-gray-200 w-8 h-8 border-0 rounded-full font-semibold cursor-pointer" onClick={onDecreade}>
        -
      </button>
    </div>
  );
};
export default Counter;
