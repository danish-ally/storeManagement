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
          compList={compList}
          horizontal={false}
          actionFlagTime={500}
          sensitivity={100}
          navigation={{
            type: "right",
            hide: true,
            timer: 2000,
            size: 16,
            unit: "px",
          }}
        />
      </div>
    </>
  );
};

export default Market;
