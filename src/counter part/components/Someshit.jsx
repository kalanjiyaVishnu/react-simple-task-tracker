import React, { createContext, useContext } from "react";

const footers = {
  version: "1.0.0.0.1",
  copyright: `&(¬‿¬);`,
};
const footers_context = createContext(footers);
const Someshit = (props) => {
  return (
    <footers_context.Provider value={footers}>
      <div className="m-2">
        <FootTop />
      </div>
    </footers_context.Provider>
  );
};
const FootTop = () => {
  const data = useContext(footers_context);

  return <h4>{data.version}</h4>;
};

export default Someshit;
