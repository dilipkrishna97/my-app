import "./style.css";
import { useSelector } from "react-redux";

const Details = (props) => {
  const { selectedDeptId, selectedEmpId } = props;

  const empList = useSelector((state) => state.empList);

  const selectedEmployee = empList.filter(
    (emp) => emp.empId === selectedEmpId && emp.deptId === selectedDeptId
  );

  const ageCalculate = (date) => {
    const dob = new Date(date);

    if (dob) {
      const month = dob.getMonth();
      const day = dob.getDay();
      const year = dob.getFullYear();

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentDay = currentDate.getDay();
      const currentYear = currentDate.getFullYear();

      if (!isNaN(month) && currentMonth > month) {
        return Number(currentYear - year);
      } else if (!isNaN(month) && currentMonth === month) {
        if (currentDay >= day) {
          return Number(currentYear - year);
        } else {
          return Number(currentYear - year) - 1;
        }
      } else if (!isNaN(month)) {
        return Number(currentYear - year) - 1;
      }
    }

    return "--";
  };

  return selectedEmployee.map((emp) => {
    return (
      <div>
        <p> Name: {emp.name} </p>
        <p> Role: {emp.empRole} </p>
        <p> Employee Id: {emp.empId}</p>
        <p> Gender:{emp.gender}</p>
        <p> Age:{ageCalculate(emp.dob)}</p>
      </div>
    );
  });
};

export default Details;
