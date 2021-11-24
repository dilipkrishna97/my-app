import "./style.css";
import LabelValue from "../LabelValue";

const EmployeesDetailsDisplay = (props) => {
  const { selectedDeptId, selectedEmpId, employeeData } = props;

  const selectedEmployee = employeeData.filter(
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
    const employeeDob = ageCalculate(emp.dob);
    return (
      <div>
        <LabelValue label={"Name: "} value={emp.name} />
        <LabelValue label={"Role: "} value={emp.empRole} />
        <LabelValue label={"Employee Id: "} value={emp.empId} />
        <LabelValue label={"Gender: "} value={emp.gender} />
        <LabelValue label={"Age: "} value={employeeDob} />
      </div>
    );
  });
};

export default EmployeesDetailsDisplay;
