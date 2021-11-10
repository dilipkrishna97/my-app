const convertQueryStringToObject = (queryString) => {
  const isQueryStringString = typeof queryString === "string";
  if (!isQueryStringString) return;
  const formatedQueryString = queryString
    .replace(/&/g, '","')
    .replace(/=/g, '":"');
  const queryStringObject = JSON.parse(
    '{"' + formatedQueryString + '"}',
    function (key, value) {
      // key === "" is used as the reviver function on end of the termination return "" as key.
      /*
      refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
      If the reviver only transforms some values and not others, be certain to return all untransformed values as-is, otherwise, they will be deleted from the resulting object.
      */
      return key === "" ? value : decodeURIComponent(value);;
    }
  );
  return queryStringObject;
};

export default convertQueryStringToObject;
