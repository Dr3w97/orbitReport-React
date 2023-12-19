import satData from "./satData";
import './styling.css'


const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  // console.log(orbitTypes)
  return (
    <div className="flex-container">
      {orbitTypes.map((type, id) => {
        return (
          <button onClick={() => filterByType(type)} key={id}>
            {type} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;