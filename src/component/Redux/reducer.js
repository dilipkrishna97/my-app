import { ADD_EMPLOYEES, DELETE_EMPLOYEE } from "./actionType";

const initialState = {
  empList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEES: {
      state.empList.push(action.payLoad);
      return {
        ...state,
        empList: [...state.empList],
      };
    }

    case DELETE_EMPLOYEE: {
      const updatedEmpList = state.empList.filter(
        (emp) => action.employeeId !== emp.empId
      );
      console.log(action.employeeId);

      return {
        ...state,
        empList: updatedEmpList,
      };
    }

    default:
      return state;
  }
};

export default reducer;
