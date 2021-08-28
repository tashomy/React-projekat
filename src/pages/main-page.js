import React, {Component} from 'react';
import { NavbarBrand } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import About from '../components/about/About';
import Features from '../components/features/Features';
import Gallery from '../components/gallery/Gallery';
import Nintendo from '../components/nintendo/Nintendo';
import Pricing from '../components/pricing/Pricing';
import Showcase from '../components/showcase/Showcase';
import Routes from '../router';

class Page extends Component {

    render() {
        return(
            <>
                <div className="main-container">
                    <Showcase/>
                    <Nintendo/>
                </div>
            </>
        );
    }
}

export default Page;