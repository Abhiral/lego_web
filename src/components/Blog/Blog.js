import React, { useState } from "react";

import Chips from "./Chip/";
import { blogList } from "../../utils/data";
import "./Blog.css";

const Blog = () => {
  const [blog, setBlog] = useState(blogList);

  return (
    <div id="Blog" className="Blog row-padding">
      <h2>Latest Blog and Articles</h2>

      <div className="blogList-wrap">
        {blog.map((b) => (
          <div className="blogItem-wrap">
            <img
              className="blogItem-cover"
              src={b.cover}
              alt="cover"
              loading="lazy"
            />
            <Chips label={b.category} />
            <h3 className="blog-title">{b.title}</h3>
            <p className="blogItem-desc">{b.description}</p>
            <footer>
              <div className="blogItem-author">
                <img src={b.authorAvatar} alt="avatar" />
                <div>
                  <h6>{b.authorName}</h6>
                  <p>{b.createdAt}</p>
                </div>
              </div>
              <button className="round-button">Read More</button>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
