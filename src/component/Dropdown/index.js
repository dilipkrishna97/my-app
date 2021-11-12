const Dropdown = ({ value, onSelectChanges, list }) => {
  return (
    <select className="dropDown" value={value} onChange={onSelectChanges}>
      {list.map((item) => (
        <option value={item.option}> {item.option} </option>
      ))}
    </select>
  );
};

export default Dropdown;
