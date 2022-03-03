import React from "react";
import ReactDom from "react-dom";
import axios from "axios";

function Reddit() {

  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
      axios.get(`https://www.reddit.com/r/reactjs.json`)
    .then(res => {
      const newPost = res.data.data.children.map(obj => obj.data);
      setPosts(newPost)
    });

  }, []);

  return(
    <div>
      <h1> /r/reactjs</h1>

      <ul>
        {posts.map(post => (
          <li key={post.id}> {post.title} <br/>
          <strong>Score</strong>&nbsp;{post.score} <br/>
          <strong>Users</strong>&nbsp;{post.author}
          </li>
        ))}
      </ul>
    </div>
    
  );
}

ReactDom.render(<Reddit/>, document.getElementById("root"));