
/*
[username]@[domainname].[top-level domainname]
username : alpha numeric with _,. & -
domainname : alpha numeric with - & .
top-level domainname: alphabet with length >2 and <=5;
*/
export const emailExpression = new RegExp(
  "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\\.\\w{2,5}$"
);

/*
The password sting is checking for:
- should contain small letters
- should contain Caps letters
- should contain number
- should contain a spl character 
- should be more than 8 character
*/
export const passwordExpression = new RegExp(
  "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,}"
);


export const specialCharacterExpression = new RegExp(
  "^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}"
);
export const upperCaseExpression = new RegExp("^(=?.*[A-Z]).*$");
export const lowerCaseExpression = new RegExp("^(=?.*[a-z]).*$");
export const numberExpression = new RegExp("^(=?.*[0-9]).*$");
export const stringLengthExpression = new RegExp("^.{8,}$");
