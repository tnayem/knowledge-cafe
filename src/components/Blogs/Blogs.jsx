import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookMark}) => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    console.log(blogs);
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            <div>
                {
                    blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBookMark={handleAddToBookMark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;