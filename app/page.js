import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import Header from "./components/header";
import Welcome from "./components/welcome";
import Featured from "./components/featured";
import Blog from "./components/blog";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Featured />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
