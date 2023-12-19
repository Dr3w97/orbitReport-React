import satData from "./satData";

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  // console.log(orbitTypes)
  return (
    <div>
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