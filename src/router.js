import React from 'react';
import { Switch, Route } from "react-router-dom";
import About from './components/about/About';
import Page from './pages/main-page';

const Routes = () => {
    return ( 
        <div>
            <Route path="/" exact component={Page}></Route>
            <Route path="/about" component={About}/>
            {/* <Route path="/features" exact component={Features}/>
            <Route path="/gallery" exact component={Gallery}/>
            <Route path="/pricing" exact component={Pricing}/>
            <Route path="/faq" exact component={FAQ}/>
            <Route path="/blog" exact component={Blog}/>
            <Route path="/contact" exact component={Contact}/> */}
        </div>
     );
}
 
export default Routes;