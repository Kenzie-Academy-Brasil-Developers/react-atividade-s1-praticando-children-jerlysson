const Card = ({ texto }) => {
  return (
    <div className="boxCard">
      <h2>Nome:</h2>
      <p>{texto}</p>
    </div>
  );
};

export default Card;
