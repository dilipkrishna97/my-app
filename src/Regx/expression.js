export const emailId = new RegExp(
  "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\\.\\w{3,5}$"
);

export const validPassword = new RegExp(
  "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,}"
);
export const specialChar = new RegExp(
  "^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}"
);
export const upperCase = new RegExp("^(=?.*[A-Z]).*$");
export const lowerCase = new RegExp("^(=?.*[a-z]).*$");
export const number = new RegExp("^(=?.*[0-9]).*$");
export const stringLength = new RegExp("^.{8,}$");
