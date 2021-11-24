import React from "react";

const CustomLoader = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <Servicerequestprogress />;
  }

  return null;
};

export default CustomLoader;
