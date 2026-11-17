import type { Metadata } from "next";
import PageFooter from "../components/PageFooter";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactArt from "../components/contact/Contactart";

export const metadata: Metadata = {
  title: "Contact Voan",
};

export default function ContactPage() {
  return (
    <div className="contactpage">
      <PageHeader />
      <main className="cpage">
        <div className="container cgrid">
          <ContactInfo />
          <ContactArt />
          <ContactForm />
        </div>
      </main>
      <PageFooter />
    </div>
  );
}
