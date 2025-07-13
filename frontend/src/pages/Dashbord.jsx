import React, { useState } from "react";
import { CircularProgress, Paper, Typography } from "@mui/material";
import Home from "../components/Home";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleAsk = async (question) => {
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        setResponse(data.candidates[0].content.parts[0].text);
      } else {
        setResponse("Unexpected response.");
      }
    } catch (err) {
      console.error(err);
      setResponse("Error contacting server.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 round">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-700">📊 Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            ✅ Questions Solved
          </h3>
          <p className="text-gray-700">
            You’ve solved <span className="font-bold">25</span> questions so far. Keep it up!
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-4 text-purple-600">
            🔥 Popular Topics
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>JavaScript Closures</li>
            <li>Python Decorators</li>
            <li>React Hooks</li>
            <li>Async/Await</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            🤔 Ask a Coding Question
          </h3>
          <p className="text-gray-700 mb-2">
            How to use: Ask any coding-related question in any programming language. The AI is specialized to help with coding problems and concepts.
          </p>
          <p className="text-sm text-gray-500">
            For non-coding questions, responses may be unpredictable!
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">
            💬 Your Coding Question
          </h3>
          <Home onAsk={handleAsk} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-4 text-green-600">
            🧑‍🏫 Instructor Response
          </h3>

          {loading && <CircularProgress className="mt-4" />}

          {!loading && response && (
            <Paper elevation={1} className="p-4 mt-4 bg-gray-100">
              <Typography variant="body1">{response}</Typography>
            </Paper>
          )}

          {!loading && !response && (
            <p className="text-gray-700">
              The instructor's answer will appear here after you submit your question.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}


