"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import Reveal from "../Reveal";

const RECIPIENT = "your@email.com";
const TOPICS = ["Project", "Job opportunity", "Collaboration", "Just saying hi"];
const MAX_LENGTH = 800;

type Errors = { name?: boolean; email?: boolean; message?: boolean };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const clear = (key: keyof Errors) =>
    setErrors((prev) => ({ ...prev, [key]: false }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {
      name: name.trim().length === 0,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
      message: message.trim().length < 10,
    };
    setErrors(next);
    if (next.name || next.email || next.message) return;

    const body = `Hi Voan,\n\n${message.trim()}\n\n— ${name.trim()}\n${email.trim()}\nTopic: ${topic}`;
    const title = subject.trim() || `Portfolio message: ${topic}`;
    window.location.href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Reveal className="form-card">
      {sent ? (
        <div className="success" role="status">
          <div className="check">
            <i className="fa-solid fa-check"></i>
          </div>
          <h2>Message ready!</h2>
          <p>
            Thanks {name.trim().split(" ")[0]}! Your email app should have
            opened with your message. Just press send there.
          </p>
          <Link className="cbtn" href="/">
            Back to Portfolio <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      ) : (
        <>
          <div>
            <h2>Send me a message</h2>
            <p>All fields marked * are required.</p>
          </div>
          <form onSubmit={onSubmit} noValidate>
            <div className="row">
              <div className={`field${errors.name ? " invalid" : ""}`}>
                <label htmlFor="name">Name *</label>
                <input
                  className="input"
                  id="name"
                  placeholder="Your name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clear("name");
                  }}
                />
                <div className="error">Please enter your name.</div>
              </div>
              <div className={`field${errors.email ? " invalid" : ""}`}>
                <label htmlFor="email">Email *</label>
                <input
                  className="input"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clear("email");
                  }}
                />
                <div className="error">Please enter a valid email.</div>
              </div>
            </div>
            <div className="field">
              <label>I&apos;m reaching out about</label>
              <div className="chips">
                {TOPICS.map((t, i) => (
                  <span key={t}>
                    <input
                      type="radio"
                      name="topic"
                      id={`topic-${i}`}
                      checked={topic === t}
                      onChange={() => setTopic(t)}
                    />
                    <label htmlFor={`topic-${i}`}>{t}</label>
                  </span>
                ))}
              </div>
            </div>
            <div className="field">
              <label htmlFor="subject">Subject</label>
              <input
                className="input"
                id="subject"
                placeholder="What's this about?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className={`field${errors.message ? " invalid" : ""}`}>
              <label htmlFor="message">Message *</label>
              <textarea
                className="input"
                id="message"
                maxLength={MAX_LENGTH}
                placeholder="Tell me a little about your idea..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clear("message");
                }}
              />
              <span className="count">
                {message.length} / {MAX_LENGTH}
              </span>
              <div className="error">
                Please write a message (at least 10 characters).
              </div>
            </div>
            <button className="cbtn" type="submit">
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
            <p className="note">
              <i className="fa-solid fa-lock"></i> Your details are only used
              to reply to you.
            </p>
          </form>
        </>
      )}
    </Reveal>
  );
}
