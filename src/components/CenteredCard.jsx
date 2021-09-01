import "./centered.css";
import Cards from "./Cards";

const CenteredCard = () => {
  return (
    <div className="centered">
      <Cards texto="Child One" />
      <Cards texto="Child Two" />
      <Cards texto="Child Three" />
    </div>
  );
};

export default CenteredCard;
