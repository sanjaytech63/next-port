import { AnimatedTooltipPreview } from "@/componets/AnimatedTooltip";
import ThreeDCardDemo from "@/componets/ExperienceSection";
import HeroSections from "@/componets/HeroSections";
import SkillsSection from "@/componets/SkillsSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeroSections />
      <SkillsSection/>
      <ThreeDCardDemo/>
      <div className="pt-6">
      <AnimatedTooltipPreview/>
      </div>
    </main>
  );
}
