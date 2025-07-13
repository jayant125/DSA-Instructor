import React, { useState } from 'react';
import { Button, TextField, CircularProgress, Container, Typography, Paper } from '@mui/material';

export default function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setResponse('');

    const res = await fetch('http://localhost:5000/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    const data = await res.json();

    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      setResponse(data.candidates[0].content.parts[0].text);
    } else {
      setResponse('Unexpected response.');
    }

    setLoading(false);
  };

  return (
    <Container className="mt-8">
      <Paper elevation={3} className="p-6">
        <Typography variant="h4" gutterBottom>Coding Instructor AI</Typography>

        <TextField
          fullWidth
          multiline
          rows={4}
          label="Your Coding Question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          className="mb-4"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAsk}
          disabled={loading}
        >
          Ask
        </Button>

        {loading && <CircularProgress className="mt-4" />}

        {response && (
          <Paper elevation={1} className="p-4 mt-4 bg-gray-100">
            <Typography variant="body1">{response}</Typography>
          </Paper>
        )}
      </Paper>
    </Container>
  );
}
