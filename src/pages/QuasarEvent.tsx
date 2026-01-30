import { useState, useEffect } from "react";
import QuasarNavigation from "@/components/quasar/QuasarNavigation";
import QuasarHero from "@/components/quasar/QuasarHero";
import QuasarAbout from "@/components/quasar/QuasarAbout";
import QuasarSpeakers from "@/components/quasar/QuasarSpeakers";
import QuasarSchedule from "@/components/quasar/QuasarSchedule";
import QuasarLocation from "@/components/quasar/QuasarLocation";
import QuasarRegistration from "@/components/quasar/QuasarRegistration";
import QuasarFooter from "@/components/quasar/QuasarFooter";

const QuasarEvent = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeroVisible(scrollPosition < window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <QuasarNavigation isHeroVisible={isHeroVisible} />
      <QuasarHero />
      <QuasarAbout />
      <QuasarSpeakers />
      <QuasarSchedule />
      <QuasarLocation />
      <QuasarRegistration />
      <QuasarFooter />
    </div>
  );
};

export default QuasarEvent;
