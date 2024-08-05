import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt="" />
            <div>
                <div className='flex justify-between my-2'>
                    <div className='flex items-center'>
                        <img className='w-16 mr-5' src={author_img} alt="" />
                        <div>
                            <h3 className='font-bold'>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{reading_time} min read
                            <button onClick={() => handleAddToBookMark(blog)} className='ml-3'><FaBookmark icon="fa-solid fa-bookmark" /></button>
                        </p>
                    </div>
                </div>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#">#{hash} </a></span>)
                }
            </p>
            <p>
                <button onClick={() => handleMarkAsRead(reading_time)} className='text-blue-700' href="">Mark as Read</button>
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;