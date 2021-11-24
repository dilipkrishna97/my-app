

const progressDisplay = (progressEvent,setLoading) => {
  
  let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
  if (percentCompleted < 100) {
    setLoading(percentCompleted)
  } else {
      (setTimeout(() => {setLoading("100")},100))
  }
};

export default progressDisplay;
