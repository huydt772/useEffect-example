import { useState, useRef } from "react";

function App() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState([]);

    const inputRef = useRef();

    const handleAdd = () => {
        setJobs([...jobs, job]);
        setJob("");

        inputRef.current.focus();
    };

    const handleSubmit = (e) => {
        if (e.which === 13) {
            handleAdd();
        }
    };

    const handleDelete = (result) => {
        setJobs((prev) => {
            const newJobs = prev.filter((job) => {
                return job !== result;
            });

            return newJobs;
        });
    };

    return (
        <div className="App">
            <h2>List job</h2>

            <input
                ref={inputRef}
                value={job}
                type="text"
                placeholder="Enter your job..."
                onChange={(e) => setJob(e.target.value)}
                onKeyDown={handleSubmit}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}{" "}
                        <span style={{ cursor: "pointer" }} onClick={() => handleDelete(job)}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
