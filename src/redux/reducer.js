import {
  ADD_EMPLOYEES,
  DELETE_EMPLOYEE,
  ADD_USER,
  DEPT_CLICKED,
} from "./actionType";

const initialState = {
  userDetails: [],
  empList: [],
  selectedDept: {},
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

      return {
        ...state,
        empList: updatedEmpList,
      };
    }

    case ADD_USER: {
      state.userDetails.push(action.payLoad);
      return {
        ...state,
        userDetails: [...state.userDetails],
      };
    }

    case DEPT_CLICKED: {
      // state.selectedDept.push(action.payLoad);
      return {
        ...state,
        selectedDept: {...action.payLoad},
      };
    }

    default:
      return state;
  }
};

export default reducer;
