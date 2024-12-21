import HeroSection from "@/components/HeroSection";
import AgricultureSection from "@/components/Home/AgricultureSection";
import SearchBarSection from "@/components/Home/Searchbar";
import WeatherHighlights from "@/components/weatherHighlights";

export default function Home() {
  return (
   <>
   <HeroSection></HeroSection>
   <SearchBarSection/>
   <WeatherHighlights/>
   <AgricultureSection/>
   
   </>
  );
}
