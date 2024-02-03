import React from "react";
import Header from "./components/header";
import Welcome from "./components/welcome";
import Featured from "./components/featured";
import Tags from "./components/tags";
import Blog from "./components/blog";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Featured />
      <Tags />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}
