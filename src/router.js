import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import Page from "./pages/main-page";
import FeaturesPage from "./pages/features";
import GalleryPage from "./pages/gallery";
import PricingPage from "./pages/pricing";
import FaqPage from "./pages/faq";
import BlogPage from "./pages/blog";
import ContactsPage from "./pages/contacts";
import blogPage1 from "./pages/blogPages/blogPage1";
import blogPage2 from "./pages/blogPages/blogPage2";
import blogPage3 from "./pages/blogPages/blogPage3";
import blogPage4 from "./pages/blogPages/blogPage4";

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Page}></Route>
      <Route path="/about" exact component={AboutPage} />
      <Route path="/features" exact component={FeaturesPage} />
      <Route path="/gallery" exact component={GalleryPage} />
      <Route path="/pricing" exact component={PricingPage} />
      <Route path="/faq" exact component={FaqPage} />
      <Route path="/blog" exact component={BlogPage} />
      <Route path="/blog/1" exact component={blogPage1} />
      <Route path="/blog/2" exact component={blogPage2} />
      <Route path="/blog/3" exact component={blogPage3} />
      <Route path="/blog/4" exact component={blogPage4} />
      <Route path="/contacts" exact component={ContactsPage} />
    </div>
  );
};

export default Routes;
