export const Card = ({ children, className }) => (
  <div className={`p-4 bg-gray-900 rounded-xl shadow-lg ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);