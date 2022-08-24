import React from "react";
import HomepageHeader from "../components/HomepageHeader";
import HomepageNav from "../components/HomepageNav";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="homepage">
      <HomepageNav />
      <HomepageHeader />
      <Footer />
    </div>
  );
}
