import LandingPage from "@/components/landingpage/LandingPage";

export default function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <LandingPage/>
    </div>
  );
}
