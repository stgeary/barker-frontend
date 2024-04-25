import React, { useState, useEffect } from "react";
import axios from "axios";

export function PostIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://[::1]:3000/posts.json")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts: ", error);
      });
  }, []);

  // const groupPostsByCategory = () => {
  //   return posts.reduce((acc, post) => {
  //     const categoryId = post.category.id;
  //     if (!acc[categoryId]) {
  //       acc[categoryId] = {
  //         categoryName: post.category.name,
  //         posts: [],
  //       };
  //     }
  //     acc[categoryId].posts.push(post);
  //     return acc;
  //   }, {});
  // };

  // const groupedposts = grouppostsByCategory();

  return (
    // <div id="posts-index" style={{ borderColor: "red", color: "red" }}>
    //   <h1>
    //     {currentUser
    //       ? `${currentUser.name}, you have evil to do!`
    //       : "You have evil to do!"}
    //     !
    //   </h1>
    //   {Object.entries(groupedposts).map(([categoryId, categoryData]) => (
    //     <div key={categoryId}>
    //       <h2>Category: {categoryData.categoryName}</h2>
    //       <div className="cards">
    //         {categoryData.posts.map((post) => (
    //           <div key={post.id} className="card">
    //             <div
    //               className="card-body"
    //               style={{
    //                 backgroundColor: "black",
    //                 color: "red",
    //                 borderColor: "red",
    //               }}
    //             >
    //               <h5 className="card-title">{post.title}</h5>
    //               <p className="card-text">{post.description}</p>
    //               <p className="card-text">{post.deadline}</p>
    //               <p className="card-text">
    //                 {post.completed ? "Completed" : "Not Completed"}
    //               </p>
    //               <button
    //                 style={{
    //                   color: "black",
    //                   fontWeight: "bold",
    //                   backgroundColor: "red",
    //                   borderColor: "black",
    //                 }}
    //                 onClick={() => onShowPost(post)}
    //                 className="btn btn-primary"
    //               >
    //                 More info
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default PostIndex;
