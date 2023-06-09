import React, { memo, useEffect, useRef, useState } from "react";
import { Notify } from "@sparrowend/ui";
import "./index.less";
const Header = memo(() => {
  // const [p, Cp] = useState(false);
  // const pRef = useRef(null);
  // useEffect(() => {
  //   console.log(pRef.current, "pRef.current");
  //   pRef.current.onChange = () => {
  //     console.log("aaaaa");
  //     Cp(!p);
  //     console.log(p);
  //   };
  // }, [p]);
  return (
    <header>
      {/* <sp-switch ref={pRef}>{p + ""}</sp-switch> */}
      <span className="title">Hello Sparrow</span>
      <div className="other">
        <span className="plan">
          <em className={"sp-icon sp-icon-yishoucang shoucang"}></em>
          Upgrade your plan
        </span>{" "}
        <span className="sp-icon sp-icon-jingshi tips"></span>
        <sp-avatar shape="circle" style={{ background: "#f56a00" }}>
          R
        </sp-avatar>
      </div>
    </header>
  );
});

let time = null;
const Content = () => {
  useEffect(() => {
    setInterval(() => {
      if (time) {
        clearInterval(time);

        return (time = 0);
      }
      time = Notify({
        type: "warning",
        title: "Tips",
        message: "All Errors!",
        position: "bottom-left",
      });
    }, 5000);
  }, []);
};

export default () => {
  return (
    <div className="dashboard">
      <Header />
      <Content />
    </div>
  );
};
