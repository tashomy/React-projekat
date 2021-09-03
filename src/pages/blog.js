import React, {Component} from 'react';
import Blog from '../components/blog/Blog';
import blogGet from '../services/load-blog.service';

class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {blogs:{}, loader:true};
    }

    componentDidMount(){
        let self = this;
        blogGet().then(function(res){
            self.setState({blogs:res, loader:false})
        })
    }

    render() {
        
        console.log(this.state.blogs);
        return(
            <>
                <Blog blogs={this.state.blogs}/>
            </>
            
        );
    }
}

export default BlogPage;