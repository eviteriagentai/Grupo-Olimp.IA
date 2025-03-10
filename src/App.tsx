import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PropertiesPage from "./components/PropertiesPage";
import NeighborhoodsPage from "./components/NeighborhoodsPage";
import AIMatchingPage from "./components/AIMatchingPage";
import AboutUsPage from "./components/AboutUsPage";
import OurTeamPage from "./components/OurTeamPage";
import ContactUsPage from "./components/ContactUsPage";
import FAQPage from "./components/FAQPage";
import PropertyDetailsPage from "./components/PropertyDetailsPage";
import ScheduleVisitPage from "./components/ScheduleVisitPage";
import FamiliesGuide from "./components/neighborhood-guides/FamiliesGuide";
import ProfessionalsGuide from "./components/neighborhood-guides/ProfessionalsGuide";
import LifestyleGuide from "./components/neighborhood-guides/LifestyleGuide";
import ActiveLivingGuide from "./components/neighborhood-guides/ActiveLivingGuide";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          <Route path="/ai-matching" element={<AIMatchingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
          <Route path="/schedule-visit/:id" element={<ScheduleVisitPage />} />
          <Route
            path="/neighborhood-guides/families"
            element={<FamiliesGuide />}
          />
          <Route
            path="/neighborhood-guides/professionals"
            element={<ProfessionalsGuide />}
          />
          <Route
            path="/neighborhood-guides/lifestyle"
            element={<LifestyleGuide />}
          />
          <Route
            path="/neighborhood-guides/active-living"
            element={<ActiveLivingGuide />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
