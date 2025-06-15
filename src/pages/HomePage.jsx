import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mic, User, Languages, BookOpen, Settings } from "lucide-react";
import { motion } from "framer-motion";

function HomePage() {
  const personas = [
    { name: "The Desert Sage", video: "desert_sage.mp4" },
    { name: "Einstein AI", video: "einstein.mp4" },
    { name: "Jim AIrry", video: "jim.mp4" },
    { name: "GandhiGPT", video: "gandhi.mp4" },
    { name: "Dr. King", video: "king.mp4" },
    { name: "Virat Mentor", video: "virat.mp4" },
  ];

  const [activePersona, setActivePersona] = useState(personas[0]);

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-4">Talk to RuBot</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {personas.map((persona, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePersona(persona)}
          >
            <Card className={`bg-gray-800 border ${activePersona?.name === persona.name ? 'border-blue-500' : 'border-gray-700'} rounded-2xl shadow-md cursor-pointer`}>
              <CardContent className="flex flex-col items-center">
                <video src={`/avatars/${persona.video}`} className="h-40 rounded-xl mb-2" autoPlay loop muted />
                <p>{persona.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <Button><Mic size={20} /></Button>
        <Button><User size={20} /></Button>
        <Button><Languages size={20} /></Button>
        <Button><BookOpen size={20} /></Button>
        <Button><Settings size={20} /></Button>
      </div>
    </div>
  );
}

export default HomePage;