import React, { useState } from "react";
import Sidebar from "../../components/features/Sidebar";
import Profile from "../../components/features/Profile";
import Conversation from "../../components/features/Conversation";
import MessageEmpty from "../../components/features/MessageEmpty";
import OpenChatMessage from "./../../components/features/OpenChatMessage";

const ConversationDashboard = () => {
  const [message, setMessage] = useState(true);
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <section className="bg-background text-foreground selection:bg-primary/20 selection:text-primary h-screen overflow-hidden flex antialiased">
      <Sidebar />
      <div className="flex-1 min-w-0 flex">
        <Profile
          profile={selectedConversation}
          onBack={() => setSelectedConversation(null)}
        />
        <div className="flex-1 ml-0 md:ml-70 pt-0 md:pt-16 flex h-full">
          <Conversation
            selectedConversation={selectedConversation}
            onSelectConversation={setSelectedConversation}
          />
          {selectedConversation ? (
            <OpenChatMessage
              profile={selectedConversation}
              onBack={() => setSelectedConversation(null)}
            />
          ) : (
            <MessageEmpty />
          )}
        </div>
      </div>
    </section>
  );
};

export default ConversationDashboard;
