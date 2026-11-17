import type { Metadata } from "next";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";
import PersonaCta from "../components/about/PersonaCta";
import PersonaHero from "../components/about/PersonaHero";
import PersonaInterests from "../components/about/PersonaInterests";
import PersonaIntro from "../components/about/PersonaIntro";
import PersonaToolbox from "../components/about/PersonaToolbox";
import PersonaTraits from "../components/about/PersonaTraits";

export const metadata: Metadata = {
  title: "About Voan — User Persona",
};

export default function AboutPage() {
  return (
    <div className="persona">
      <PageHeader />
      <main>
        <PersonaHero />
        <PersonaIntro />
        <PersonaTraits />
        <PersonaToolbox />
        <PersonaInterests />
        <PersonaCta />
      </main>
      <PageFooter />
    </div>
  );
}
