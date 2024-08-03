import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const handleAddToBookMark = blog =>{
    console.log("Book Mark adding soon");
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="py-2">
        <Header></Header>
      </div>
      <hr />
      <div className="md:flex">
        <Blogs handleAddToBookMark = {handleAddToBookMark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
