import React from 'react';
import img from "../../images/blog1.jpg";
import img2 from "../../images/blog2.jpg";

const Blog = (props) => {

    console.log(Array.isArray(props));
     const blogs = Array.from(props.blogs);
     console.log(blogs);
     console.log(Array.isArray(blogs));

    return (
        <div className="blog">
            {blogs.map((item)=>{
                
                return (
                    <>
                    <div className="blog-box" key={item.id}>
                        <img src={img}></img>
                        <div className="blog-sub">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                            <a href="#" className="btn btn-primary">Read more</a>
                        </div>   
                    </div>
                    
                    
                
                    </>
                )
            })}
        </div>
    )
}

export default Blog;