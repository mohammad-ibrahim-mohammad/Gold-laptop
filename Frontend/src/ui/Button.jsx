function Button({ children }) {
  return (
    <button className="text-md w-fit cursor-pointer rounded-2xl bg-blue-600 px-5 py-2.5 font-medium text-gray-50 transition-all duration-300 hover:bg-blue-700">
      {children}
    </button>
  );
}

export default Button;
