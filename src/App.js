import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums", "todos"];

function App() {
    const [clickedValue, setClickedValue] = useState("posts");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${clickedValue}`)
            .then((response) => response.json())
            .then((result) => {
                setPosts(result);
            });
    }, [clickedValue]);

    return (
        <div className="App">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={tab === clickedValue ? { backgroundColor: "#333", color: "#fff" } : {}}
                    onClick={() => setClickedValue(tab)}
                >
                    {tab}
                </button>
            ))}

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.body}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
