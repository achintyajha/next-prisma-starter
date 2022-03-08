import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch(`http://localhost:3000/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
        <div>
          <form onSubmit={submitData}>
            <h1>New Post</h1>
            <p>Type in markdown!</p>
            <div className="mb-5">
            <a><input disabled={!content || !title} type="submit" value="Post" /></a>{" "}(Add a title and the content first)
            </div>
            <div>
            <input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
              className="w-full outline-none bg-transparent"
            />
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={8}
              value={content}
              className="w-full outline-none h-auto resize-none bg-transparent"
            />
            </div>
          </form>
        </div>
    </Layout>
  );
};

export default Draft;
