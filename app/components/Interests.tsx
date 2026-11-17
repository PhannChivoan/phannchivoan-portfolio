import Image from "next/image";
import Reveal from "./Reveal";

const interests = [
  { name: "Gaming", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=350&q=80" },
  { name: "Traveling", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=350&q=80" },
  { name: "Reading", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=350&q=80" },
  { name: "Music", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=350&q=80" },
];

export default function Interests() {
  return (
    <Reveal className="interests" id="interests">
      <h2>My Interests</h2>
      <p>Beyond coding, I love exploring new things.</p>
      <div className="interest-grid">
        {interests.map((i) => (
          <div className="interest" key={i.name}>
            <Image src={i.image} alt={i.name} fill sizes="120px" />
            <span>{i.name}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
