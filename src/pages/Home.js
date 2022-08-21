import React from "react";
import HomepageHeader from "../components/HomepageHeader";
import HomepageNav from "../components/HomepageNav";
export default function Home() {
  return (
    <div className="homepage">
      <HomepageNav />
      <HomepageHeader />
    </div>
  );
}
