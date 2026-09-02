import React from "react";
import { useNavigate } from "react-router-dom";

const conversations = [
  {
    id: 1,
    name: "Elena Rostova",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Ug5UCRiq5qtIpdf1DTGffGECx0v3fUHPbdW1V0IonBM1o3_6Xy04wnQym479XdPHF6-aqEplSq38k6TwZP_wzIpzOG8brksJT3rDLwWis_5wR56s3RAedYVT3FLMWuOagihWQwtzufi-SUDZIKqiLeMKsFm3rCKg8TqOfrd41HSQy-46Di5ziU8L_Ce51pZrQ-OBMPxTJevbrtgnXG1PbGXwxXnX4CS6WiSoXIMHZXxVGQlDOEH7",
    status: "online",
    time: "Just now",
    typing: true,
    unread: 3,
  },
  {
    id: 2,
    name: "Project Nexus Team",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYrRlCovKFVS5vR0-pzVljbe_eQz35LW4ja-kH_PGC9rY-rwDIPpJTgAMWUmShAmC_0bhhwEVjjla__Phjz6gff5jJUetvyKJaFPeve2XEqPQNu2TnUDjRnHX1SGlbD5E-nY6nblQqhR4fxirnJdiy26UyYTlJZaGp0a5ef4HH56tUYn6yZNCj9y1WFr9KU3tCJRT6RZ--5ajzNSoOhcbu2Irw0jHSEFkxJwgLkpl6zkzM2Du90B95",
    status: "offline",
    time: "10:42 AM",
    message: "Marcus: The latest deployment looks good. Waiting on QA.",
    unread: 0,
  },
  {
    id: 3,
    name: "Julian Vance",
    avatar: null,
    initials: "J",
    status: "busy",
    time: "Yesterday",
    message: "Can we reschedule the sync to Thursday?",
    unread: 0,
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    avatar: null,
    initials: "S",
    status: "online",
    time: "Yesterday",
    message: "Sounds good. I'll send you the details.",
    unread: 2,
  },
  {
    id: 5,
    name: "Design Team",
    avatar: null,
    initials: "D",
    status: "online",
    time: "Monday",
    message: "The new dashboard designs are ready for review.",
    unread: 0,
  },
  {
    id: 6,
    name: "Michael Chen",
    avatar: null,
    initials: "M",
    status: "offline",
    time: "Sunday",
    message: "Thanks! I'll take a look at it tomorrow.",
    unread: 0,
  },
];

const statusStyles = {
  online: {
    color: "bg-secondary",
    glow: "shadow-[0_0_7px_rgba(0,181,148,0.7)]",
  },
  busy: {
    color: "bg-tertiary",
    glow: "shadow-[0_0_7px_rgba(254,177,39,0.5)]",
  },
  offline: {
    color: "bg-surface-variant",
    glow: "",
  },
};

const Conversation = ({ selectedConversation, onSelectConversation }) => {
  const navigate = useNavigate();
  function handleConversationClick(conversation) {
    onSelectConversation(conversation);
    navigate(`/dashboard/${conversation.id}`);
  }
  return (
    <section className="z-30 flex h-full w-full flex-col border-r border-border bg-surface/70 backdrop-blur-xl md:w-90">
      {/* Search */}
      <div className="border-b border-border p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="h-10 w-full rounded-lg border border-border bg-surface-elevated/70 pl-4 pr-4 font-sans text-sm text-foreground outline-none placeholder:text-outline transition-all duration-200 focus:border-primary/40 focus:bg-surface-elevated focus:ring-1 focus:ring-primary/30"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="chat-scrollbar flex-1 space-y-1.5 overflow-y-auto p-3">
        {conversations.map((conversation) => {
          const status = statusStyles[conversation.status];

          const isSelected = selectedConversation?.id === conversation.id;

          return (
            <button
              type="button"
              key={conversation.id}
              onClick={() => handleConversationClick(conversation)}
              className={`group relative flex w-full cursor-pointer items-start gap-3 rounded-lg border p-3 text-left transition-all duration-200 active:scale-[0.99] ${
                isSelected
                  ? "border-primary/10 bg-primary/5 hover:border-primary/20 hover:bg-primary/10"
                  : "border-transparent hover:border-border hover:bg-glass"
              }`}
            >
              {/* Active indicator */}
              {isSelected && (
                <div className="absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-r-full bg-primary shadow-[0_0_10px_rgba(0,209,255,0.7)]" />
              )}

              {/* Avatar */}
              <div className="relative ml-1 shrink-0">
                {conversation.avatar ? (
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="h-11 w-11 rounded-full border border-border object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated font-display text-lg font-semibold text-primary">
                    {conversation.initials}
                  </div>
                )}

                {/* Presence */}
                <div
                  className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-surface ${status.color} ${status.glow}`}
                />
              </div>

              {/* Conversation Content */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-baseline justify-between gap-2">
                  <h3
                    className={`truncate pr-2 font-sans text-sm ${
                      isSelected
                        ? "font-semibold text-foreground"
                        : "font-medium text-foreground"
                    }`}
                  >
                    {conversation.name}
                  </h3>

                  <span
                    className={`shrink-0 font-mono text-xs ${
                      isSelected ? "text-primary" : "text-outline"
                    }`}
                  >
                    {conversation.time}
                  </span>
                </div>

                {/* Typing */}
                {conversation.typing ? (
                  <div className="flex items-center gap-2">
                    <div className="flex w-fit items-center gap-1 rounded-full border border-border bg-surface-elevated px-2 py-1">
                      <div className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                      <div className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                      <div className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                    </div>

                    <span className="font-sans text-xs italic text-primary">
                      Typing...
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <p className="min-w-0 flex-1 truncate font-sans text-sm leading-5 text-muted">
                      {conversation.message}
                    </p>

                    {/* Unread count */}
                    {conversation.unread > 0 && (
                      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-primary px-1.5 font-mono text-[10px] font-semibold text-background shadow-[0_0_8px_rgba(0,209,255,0.25)]">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Conversation;
