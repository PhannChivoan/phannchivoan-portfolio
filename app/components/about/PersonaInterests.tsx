import Image from "next/image";
import Reveal from "../Reveal";

const interests = [
  { name: "Gaming", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&q=80" },
  { name: "Traveling", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80" },
  { name: "Reading", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80" },
  { name: "Music", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=500&q=80" },
];

export default function PersonaInterests() {
  return (
    <section className="psec">
      <div className="container">
        <h2 className="section-title">Beyond Coding</h2>
        <p className="psub">What I enjoy when I&apos;m away from the keyboard.</p>
        <Reveal className="pig">
          {interests.map((i) => (
            <div className="pint" key={i.name}>
              <Image src={i.image} alt={i.name} fill sizes="(max-width: 900px) 50vw, 25vw" />
              <span>{i.name}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
