import React from "react";

const TopHeader = () => {
  const [thePosition, setThePosition] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  return (
    <div className="top-header-area header-area fixed-top" style={{ backgroundColor: "black"}}>
      <div className="container">
        <div className="row align-items-center">
          <div style={{ display: "flex", gap:'8px' }}>
            <img
              src="/images/Ninja-Vector.png"
              style={{ width: "50px", height: '50px', opacity: thePosition ? 100 : 0 }}
            />
            <div className="header-content-left ">
              <p style={{marginTop:'5px',color:"white"}}>Welcome To Ninga Cover !</p>
            </div>
            <div style={{ marginLeft: "auto" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;