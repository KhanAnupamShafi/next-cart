const Button = ({ children }) => {
  return (
    <div className="p-1 rounded-full text-sm font-medium text-gray-700 bg-gray-200  hover:bg-gray-300 focus:outline-none focus:ring focus:border-purple-300 cursor-pointer">
      {children}
    </div>
  );
};

export default Button;
