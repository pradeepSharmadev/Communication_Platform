import { useRef, useState } from "react";

const dummyMessages = [
  {
    id: 1,
    sender: "sarah",
    text: "Hey! Did you manage to check out the new design system files I sent over?",
    time: "10:24 AM",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCej5D8Z6qx9qbmtiMC7ua1GzBUq1Ly_10aNSGatNzyA5hc1sk9kGwyGp5vD0x8uQHdQQek9QmyBCkb_TFJluHMrCdTvns54U6UlxRu4tp00ZTDJGFK478-rF4XwWoH8OoaMF1z9wuQSrMFC_sh9brrptQyv_E0dmyrtbDG3NrJnEq8PoBXO067PIu7B95BR9Rl6kXLOQoohaYRLShWmpP7Sp8Qodn9gPnMhOnxWj5e85jL9xFRr_CR",
  },
  {
    id: 2,
    sender: "me",
    text: "Yes! Just going through them now. The glassmorphism approach looks incredibly sleek.",
    time: "10:26 AM",
    status: "read",
  },
  {
    id: 3,
    sender: "me",
    text: "I specifically love how we're handling the elevation tokens. Very lightweight.",
    time: "10:27 AM",
    status: "read",
  },
  {
    id: 4,
    sender: "sarah",
    text: "Awesome. I think the ambient glow effects really sell the 'real-time' feel. We just need to make sure performance holds up.",
    time: "10:30 AM",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCn32SUbL9pLl0A5aLonMhP8HJ0R7iGyK_d3tyulWAPpAIfUd3GPirOU5KGP47nvKPO6nmYI3-MUhEcKtuyclcXxLHHuqQ9qsqfG3ts1NnkOcr5shw-gIv_wgr2bfN76g7ToovTvK0DcXur7mMlReMzfz0OYyM-Cvh3nnlUaRD03_N44GfjJaT3dLIZBzhULMESDcxkOaMBKu88hIb7stftZxGl7v8qtRlD6Qn21CH8IsJnKNLGXhlZ",
  },
];

const sarah = {
  name: "Sarah",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCej5D8Z6qx9qbmtiMC7ua1GzBUq1Ly_10aNSGatNzyA5hc1sk9kGwyGp5vD0x8uQHdQQek9QmyBCkb_TFJluHMrCdTvns54U6UlxRu4tp00ZTDJGFK478-rF4XwWoH8OoaMF1z9wuQSrMFC_sh9brrptQyv_E0dmyrtbDG3NrJnEq8PoBXO067PIu7B95BR9Rl6kXLOQoohaYRLShWmpP7Sp8Qodn9gPnMhOnxWj5e85jL9xFRr_CR",
};

const attachmentOptions = [
  {
    id: "media",
    label: "Photos & videos",
    icon: "photo_library",
    accept: "image/*,video/*",
  },
  {
    id: "audio",
    label: "Audio",
    icon: "audio_file",
    accept: "audio/*",
  },
  {
    id: "document",
    label: "Document",
    icon: "description",
    accept: "*/*",
  },
  {
    id: "location",
    label: "Location",
    icon: "location_on",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "person",
  },
];

const OpenChatMessage = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showAttachments, setShowAttachments] = useState(false);

  const fileInputRef = useRef(null);

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      }),
      status: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const handleAttachment = (option) => {
    setShowAttachments(false);

    if (option.accept) {
      fileInputRef.current?.setAttribute("accept", option.accept);
      fileInputRef.current?.click();
      return;
    }

    // Handle non-file attachments here later.
    console.log(`Selected: ${option.id}`);
  };

  const handleFiles = (event) => {
    const files = Array.from(event.target.files || []);

    if (!files.length) return;

    console.log("Selected files:", files);

    // Upload files to your backend here.
    //
    // Example:
    // const formData = new FormData();
    // files.forEach((file) => formData.append("files", file));
    //
    // await fetch("/api/messages/upload", {
    //   method: "POST",
    //   body: formData,
    // });

    event.target.value = "";
  };

  return (
    <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col bg-background/40">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 opacity-40 blur-[120px]" />

        {/* Secondary subtle glow */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/5 blur-[100px]" />
      </div>
      {/* Messages */}
      <div className="chat-scrollbar min-h-0 flex-1 overflow-y-auto px-4 py-5 md:px-6 md:py-6">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-5">
          {/* Date */}
          <div className="my-2 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="rounded-full border border-border bg-surface/80 px-3 py-1 font-sans text-xs font-medium text-muted backdrop-blur-md">
              Today
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Messages */}
          {messages.map((item) => {
            const isMine = item.sender === "me";

            return (
              <div
                key={item.id}
                className={`flex max-w-[88%] items-end gap-2 md:max-w-[72%] ${
                  isMine ? "ml-auto justify-end" : ""
                }`}
              >
                {!isMine && (
                  <div className="mb-5 shrink-0">
                    <img
                      src={item.avatar || sarah.avatar}
                      alt={sarah.name}
                      className="h-8 w-8 rounded-full object-cover ring-1 ring-border"
                    />
                  </div>
                )}

                <div
                  className={`flex min-w-0 flex-col gap-1 ${
                    isMine ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`
                      px-4 py-3 font-sans text-sm leading-6
                      ${
                        isMine
                          ? "rounded-2xl rounded-br-sm bg-primary text-background shadow-[0_4px_18px_rgba(0,209,255,0.18)]"
                          : "rounded-2xl rounded-bl-sm border border-border bg-surface-elevated/80 text-foreground shadow-[0_4px_16px_rgba(0,0,0,0.2)] backdrop-blur-md"
                      }
                    `}
                  >
                    {item.text}
                  </div>

                  <div className="flex items-center gap-1 px-1 font-sans text-[10px] text-muted">
                    <span>{item.time}</span>

                    {isMine && (
                      <span
                        className={`material-symbols-outlined text-[13px]! ${
                          item.status === "read" ? "text-primary" : "text-muted"
                        }`}
                      >
                        {item.status === "read" ? "done_all" : "done"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing */}
          {isTyping && (
            <div className="flex items-end gap-2">
              <img
                src={sarah.avatar}
                alt={sarah.name}
                className="h-7 w-7 rounded-full object-cover opacity-80 ring-1 ring-border"
              />

              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-surface-elevated/70 px-4 py-3 shadow-sm backdrop-blur-md">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </div>
          )}

          <div className="h-2 shrink-0" />
        </div>
      </div>

      {/* Composer */}
      <div className="relative border-t border-border bg-surface/50 px-4 py-4 backdrop-blur-xl md:px-6 md:py-5">
        <div className="mx-auto w-full max-w-4xl">
          {/* Attachment popup */}
          {showAttachments && (
            <div
              className="
                absolute bottom-[calc(100%-4px)] left-4 z-50
                w-64 overflow-hidden
                rounded-2xl border border-border
                bg-surface-elevated/95
                p-2
                shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                backdrop-blur-2xl
                md:left-6
              "
            >
              <div className="px-3 pb-2 pt-2">
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-muted">
                  Attach
                </p>
              </div>

              <div className="space-y-1">
                {attachmentOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleAttachment(option)}
                    className="
                      group flex w-full items-center gap-3
                      rounded-xl px-3 py-2.5
                      text-left
                      transition-all duration-150
                      hover:bg-glass
                    "
                  >
                    <span
                      className="
                        flex h-9 w-9 shrink-0 items-center justify-center
                        rounded-xl border border-border
                        bg-surface
                        text-muted
                        transition-colors
                        group-hover:border-primary/30
                        group-hover:bg-primary/10
                        group-hover:text-primary
                      "
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {option.icon}
                      </span>
                    </span>

                    <span className="font-sans text-sm font-medium text-foreground">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={handleFiles}
          />

          {/* Input */}
          <div
            className="
              flex items-end gap-1
              rounded-2xl border border-border
              bg-surface-elevated/70 p-2
              shadow-[0_4px_20px_rgba(0,0,0,0.2)]
              backdrop-blur-xl
              transition-all duration-200
              focus-within:border-primary/50
              focus-within:shadow-[0_0_20px_rgba(0,209,255,0.08)]
            "
          >
            {/* Plus */}
            <button
              type="button"
              aria-label="Add attachment"
              aria-expanded={showAttachments}
              onClick={() => setShowAttachments((prev) => !prev)}
              className={`
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl transition-all duration-200
                active:scale-95
                ${
                  showAttachments
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-glass hover:text-primary"
                }
              `}
            >
              <span
                className={`material-symbols-outlined text-[21px] transition-transform duration-200 ${
                  showAttachments ? "rotate-45" : ""
                }`}
              >
                add
              </span>
            </button>

            {/* Text */}
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder={`Message ${sarah.name}...`}
              aria-label={`Message ${sarah.name}`}
              className="
                max-h-32 min-h-10 flex-1 resize-none
                overflow-y-auto bg-transparent
                px-2 py-2.5
                font-sans text-sm leading-5
                text-foreground
                placeholder:text-muted
                outline-none
                focus:ring-0
              "
            />

            {/* Emoji */}
            <button
              type="button"
              aria-label="Add emoji"
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl text-muted
                transition-all duration-200
                hover:bg-glass hover:text-tertiary
                active:scale-95
              "
            >
              <span className="material-symbols-outlined text-[21px]">
                mood
              </span>
            </button>

            {/* Send */}
            <button
              type="button"
              onClick={handleSend}
              disabled={!message.trim()}
              aria-label="Send message"
              className="
                flex h-10 w-10 shrink-0 items-center justify-center
                rounded-xl bg-primary text-background
                shadow-[0_2px_12px_rgba(0,209,255,0.25)]
                transition-all duration-200
                hover:shadow-[0_0_18px_rgba(0,209,255,0.35)]
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-30
                disabled:shadow-none
              "
            >
              <span className="material-symbols-outlined text-[20px]">
                send
              </span>
            </button>
          </div>

          {/* Hint */}
          <div className="mt-2 hidden items-center justify-center gap-1.5 md:flex">
            <span className="font-sans text-[10px] text-muted">Press</span>

            <kbd className="rounded border border-border bg-glass px-1.5 py-0.5 font-mono text-[9px] text-muted">
              Enter
            </kbd>

            <span className="font-sans text-[10px] text-muted">to send</span>

            <span className="mx-1 text-[10px] text-outline">•</span>

            <kbd className="rounded border border-border bg-glass px-1.5 py-0.5 font-mono text-[9px] text-muted">
              Shift + Enter
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenChatMessage;
