const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-flash";

// System instruction sent as `system_instruction`
const SYSTEM_INSTRUCTION = "You are a helpful and knowledgeable coding instructor. Answer clearly and concisely.";

// POST endpoint
app.post("/api/ask", async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: "Question is required" });
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        { role: "user", parts: [{ text: question }] }
                    ],
                    system_instruction: SYSTEM_INSTRUCTION
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            res.json(data);
        } else {
            console.error("Gemini API error:", data);
            res.status(500).json({ error: "Gemini API error", details: data });
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to communicate with Gemini API" });
    }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
