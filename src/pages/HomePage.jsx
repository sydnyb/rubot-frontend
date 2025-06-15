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
