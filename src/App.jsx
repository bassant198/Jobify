import { useState } from "react";
import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import Apply from "./pages/Apply";
import About from "./pages/About";

import "./App.css";

function App() {
    const [savedJobs, setSavedJobs] = useState(
        JSON.parse(localStorage.getItem("savedJobs")) || []
    );

    function toggleSavedJob(job) {
        const alreadySaved = savedJobs.some(
            (savedJob) => savedJob.id === job.id
        );

        let updatedJobs;

        if (alreadySaved) {
            updatedJobs = savedJobs.filter(
                (savedJob) => savedJob.id !== job.id
            );
        } else {
            updatedJobs = [...savedJobs, job];
        }

        setSavedJobs(updatedJobs);

        localStorage.setItem(
            "savedJobs",
            JSON.stringify(updatedJobs)
        );
    }

    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/jobs"
                    element={
                        <Jobs
                            savedJobs={savedJobs}
                            toggleSavedJob={toggleSavedJob}
                        />
                    }
                />

                <Route
                    path="/jobs/:id"
                    element={<JobDetails />}
                />

                <Route
                    path="/saved"
                    element={
                        <SavedJobs
                            savedJobs={savedJobs}
                            toggleSavedJob={toggleSavedJob}
                        />
                    }
                />

                <Route
                    path="/apply"
                    element={<Apply />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />
            </Routes>

            <Footer />
        </>
    );
}

export default App;