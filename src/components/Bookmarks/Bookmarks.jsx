import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 mx-3">
            <h4 className='text-2xl font-semibold mx-4'> Bookmarked Blogs {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark=><Bookmark
                    bookmark={bookmark}
                    key={bookmark.id}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;