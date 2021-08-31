import React, {Component} from 'react';
import Faq from '../components/faq/Faq';
import getFaqItems from '../services/FaqItems';

class FaqPage extends Component {

    constructor(props) {
        super(props);
        this.state = { faqItems:{}, loader: true }
    }
    

    componentDidMount(){
        let self = this;
        getFaqItems().then(function(res){
            self.setState({faqItems: res, loader: false})
        })
    }

    render() {

        let faqItems = this.state.faqItems;
        console.log(faqItems);
        console.log("natasa");
        return(
            <>
                
                <Faq content={faqItems}/>
                
            </>
        );
    }
}

export default FaqPage;