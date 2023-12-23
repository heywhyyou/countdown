const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-secondary mb-4 ml-2">
      Count
    </button>
  );
};

export default Button;
