import { React } from "react";
import { PageSlider } from "page-slider-react";
import Home from "./Home";
import Services from "./Home/Services";
import WorkingExp from "./Home/WorkingExp";
import Contact from "./Home/Contact";
import Login from "./Home/Login";

const Market = (props) => {
  const compList = [
    <Home />,
    <Services />,
    <WorkingExp />,
    <Contact />,
    <Login />,
  ];

  return (
    <>
      <div style={{ overflow: "hidden", height: "100%" }}>
        <PageSlider
          horizontal={false}
          sensitivity={10}
          navigation={{
            type: "left",
            hide: false,
            size: 50,
            unit: "vh",
          }}
          compList={compList}
        />
      </div>
    </>
  );
};

export default Market;
