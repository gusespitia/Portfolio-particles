import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <TransitionPage />
      <div className="flex bg-no-repeat bg-gradiant-cover h-full w-full ">
        <CoverParticles />
        <Introduction />
      </div>
    </main>
  );
}
