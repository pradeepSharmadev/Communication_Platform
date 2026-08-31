import React from "react";
import Sidebar from "../../components/features/Sidebar";
import Profile from "../../components/features/Profile";
import Conversation from "../../components/features/Conversation";
import MessageEmpty from "../../components/features/MessageEmpty";

const ConversationDashboard = () => {
  return (
    <section className="bg-background text-foreground selection:bg-primary/20 selection:text-primary h-screen overflow-hidden flex antialiased">
      <Sidebar />
      <div className="flex-1 min-w-0 flex">
        <Profile />
        <div className="flex-1 ml-0 md:ml-70 pt-0 md:pt-16 flex h-full">
          <Conversation />
          <MessageEmpty />
        </div>
      </div>
    </section>
  );
};

export default ConversationDashboard;
