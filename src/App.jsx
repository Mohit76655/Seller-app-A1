import { useState } from 'react';
import './App.css'
import Nav from "./components/Nav"
import Pagination from "./components/Pagination"
import Products from './products.json'

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Products.slice(firstPostIndex, lastPostIndex);
  return (
    <>
    <Nav Products = {currentPosts} />
    <Pagination
                totalPosts={Products.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
    </>
  )
}

export default App
