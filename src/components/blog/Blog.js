import React from "react";
import img from "../../images/blog1.jpg";
import img2 from "../../images/blog2.jpg";
import { Link } from "react-router-dom";

const Blog = (props) => {
  console.log(Array.isArray(props));
  const blogs = Array.from(props.blogs);
  console.log(blogs);
  console.log(Array.isArray(blogs));

  return (
    <div className="blog">
      {blogs.map((item) => {
        console.log(item.img);
        return (
          <>
            <div className="blog-box" key={item.id}>
              <img src={img}></img>
              <div className="blog-sub">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <Link to={`/blog/${item.id}`}>
                  <span href="#" className="btn btn-primary">
                    Read more
                  </span>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Blog;
