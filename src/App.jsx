import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [markAsRead, setMarkAsRead] = useState(0)
  const handleAddToBookMark = blog =>{
    const newBookMarks = [...bookmarks, blog]
    setBookmarks(newBookMarks)
  }
const handleMarkAsRead =(data) =>{
console.log("Mark as Read")
}
  return (
    <div className="max-w-6xl mx-auto">
      <div className="py-2">
        <Header></Header>
      </div>
      <hr />
      <div className="md:flex mt-5">
        <Blogs 
        handleAddToBookMark = {handleAddToBookMark}
        handleMarkAsRead = {handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
