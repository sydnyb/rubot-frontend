export const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl ${className}`}
  >
    {children}
  </button>
);