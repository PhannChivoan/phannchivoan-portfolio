import Image from "next/image";
import "./contact-art.css";

// The mascot image, served from /public (public/contact.png).
const ROBOT_SRC = "/contact.png";

// 4-point sparkle drawn around (0,0) with a radius of 1.
const SPARK = "M0 -1 Q.14 -.14 1 0 Q.14 .14 0 1 Q-.14 .14 -1 0 Q-.14 -.14 0 -1Z";

export default function ContactArt() {
  return (
    <div className="robot" aria-hidden="true">
      {/* Frosted halo: blurs whatever sits behind/next to the robot */}
      <div className="robot-halo" />
      <div className="robot-shadow" />
      <div className="robot-float">
        {/* Orbit ring + sparkles sit behind the robot. Coordinates are in the
            same scale as the image box (313 x 308). */}
        <svg className="robot-orbit" viewBox="0 0 313 308.5" fill="none">
          <defs>
            <linearGradient id="orbit-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2864f0" />
              <stop offset="1" stopColor="#a9c0ff" />
            </linearGradient>
            <linearGradient id="orbit-spark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#7ea4ff" />
              <stop offset="1" stopColor="#c9d8ff" />
            </linearGradient>
          </defs>
          <ellipse
            cx="299"
            cy="292"
            rx="96"
            ry="40"
            transform="rotate(-10 299 292)"
            stroke="url(#orbit-line)"
            strokeWidth="3"
            strokeLinecap="round"
            opacity=".85"
          />
          <path d={SPARK} transform="translate(210 273) scale(6)" fill="#5b8cff" />
          <path d={SPARK} transform="translate(227 355) scale(11)" fill="url(#orbit-spark)" />
        </svg>
        <Image
          className="robot-img"
          src={ROBOT_SRC}
          alt=""
          width={1263}
          height={1245}
          sizes="380px"
          loading="eager"
        />
      </div>
    </div>
  );
}