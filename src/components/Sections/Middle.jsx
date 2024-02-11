import { useState } from "react";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import axios from "axios";
import "./middle.css";

const Middle = ({ posts }) => {
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const handleCreate = (obj) => {
    axios
      .post("http://localhost:3000/post/add", obj)
      .then((res) => {
        console.log("created");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const HandleComment = (id, content) => {
    axios
      .post(`http://localhost:3000/comment/add/${id}`, content)
      .then((res) => {
        console.log("comment added");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/post/delete/${id}`)
      .then((res) => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <div className="add">
      <Box>
        <h3>Feed</h3>
        <textarea
          placeholder="New Post"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />
        <button
          onClick={() => {
            handleCreate({
              body: body,
              file: file,
            });
          }}
        >
          Upload
        </button>

        {posts.map((post, index) => {
          return (
            <div className="posts" key={index}>
              {post.body}
              <img
                src={post.file}
                alt="postimage"
                style={{ width: "360px", height: "240px" }}
              />
              <p style={{ fontSize: "10px", textAlign: "right" }}>
                {post.createdAt}
              </p>
              <textarea
                name="New Post"
                id=""
                cols="30"
                rows="10"
                placeholder="New Comment"
                style={{
                  height: "40px",
                  width: "500px",
                  marginLeft: "20px",
                }}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
              <button
                onClick={(id) => {
                  HandleComment(post.id, {
                    content: content,
                  });
                  window.location.reload();
                }}
              >
                add a Comment
              </button>
              <p>
                {post.comments.map((comment) => {
                  return <div>{comment.content}</div>;
                })}
              </p>

              <button
                onClick={() => {
                  handleDelete(post.id);
                  window.location.reload();
                }}
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          );
        })}
      </Box>

      {/* <input type="text" onChange={(e)=>{setBody(e.target.value)}}/>
<input type="file" onChange={(e)=>{setFile(e.target.value)}}/>
<button onClick={(id)=>{handleUpdate(post.id,{
    body:body,
    file:file
});window.location.reload()}}> Update  </button>*/}
    </div>
  );
};

export default Middle;
