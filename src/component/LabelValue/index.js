import "./style.css";

const LabelValue = ({ label, value }) => {
  return (
    <div className="labelvalue">
      <b className="labelvalue_bold">{label} </b> {value}<br/><br/>
    </div>
  );
};

export default LabelValue;
