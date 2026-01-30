import Navigation from "@/components/Navigation";
import Profile from "@/components/Profile";
import Member from "@/components/Member";
import SetList from "@/components/SetList";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Profile />
      <Member />
      <SetList />
      <Contact />
      <Footer />
    </main>
  );
}
