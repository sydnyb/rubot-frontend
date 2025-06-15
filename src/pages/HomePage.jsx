import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mic, User, Languages, BookOpen, Settings } from "lucide-react";
import { motion } from "framer-motion";

// Persona list
const personas = [
  { name: "Desert Sage", video: "/avatars/desert_sage.mp4" },
  { name: "Einstein AI", video: "/avatars/einstein.mp4" },
  { name: "Jim AIrry", video: "/avatars/jim.mp4" },
  { name: "GandhiGPT", video: "/avatars/gandhi.mp4" },
  { name: "Dr. King", video: "/avatars/king.mp4" },
  { name: "Virat Mentor", video: "/avatars/virat.mp4" },
];

const HomePage = () => {
  const [activePersona, setActivePersona] = useState(personas[0]);
  const [transcript, setTranscript] = useState("");
  const [reply, setReply] = useState("");

  const handleTalk = () => {
    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert("Speech Recognition not supported in this browser.");
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = (event) => {
        const speechText = event.results[0][0].transcript;
        setTranscript(speechText);

        // Mock response from RuBot
        const response = `You said: "${speechText}". I am ${activePersona.name}, your AI companion.`;
        setReply(response);

        const utterance = new SpeechSynthesisUtterance(response);
        speechSynthesis.speak(utterance);
      };

      recognition.onerror = (err) => {
        console.error("Speech Recognition error", err);
        alert("Microphone access failed.");
      };
    } catch (e) {
      console.error("Error in voice processing", e);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">👋 Welcome to RuBot</h1>
      <p className="mb-6 text-gray-300">Choose your AI companion to start chatting.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {personas.map((persona, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActivePersona(persona)}
          >
            <Card className={`border ${activePersona?.name === persona.name ? 'border-blue-500' : 'border-gray-700'} rounded-2xl shadow-md cursor-pointer`}>
              <CardContent>
                <video
                  src={persona.video}
                  className="rounded-xl w-full"
                  autoPlay
                  muted
                  loop
                />
                <p className="text-center mt-2">{persona.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-4 mb-4">
        <Button onClick={handleTalk}>
          <Mic className="inline-block mr-2" />
          Talk to RuBot
        </Button>
        <Button><User /></Button>
        <Button><Languages /></Button>
        <Button><BookOpen /></Button>
        <Button><Settings /></Button>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-xl">
        <p><strong>You:</strong> {transcript || "Say something..."}</p>
        <p className="mt-2"><strong>RuBot:</strong> {reply || "I'll respond here!"}</p>
      </div>
    </div>
  );
};

export default HomePage;
