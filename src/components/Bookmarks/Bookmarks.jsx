import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300">
            <h1>This is booksmarks {bookmarks.length}</h1>
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