import React, { useState, useEffect } from "react";

const WPGraphQLFeed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://keithratner.live/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            posts {
              nodes {
                title
                date
                excerpt
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.data.posts.nodes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.map((post) => (
        <div key={post.title}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export default WPGraphQLFeed;
