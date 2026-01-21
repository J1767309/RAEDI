import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import WhyRochester from "./pages/WhyRochester";
import News from "./pages/News";
import Contact from "./pages/Contact";
import PropertySearch from "./pages/PropertySearch";
import BusinessFunding from "./pages/BusinessFunding";
import BusinessResources from "./pages/BusinessResources";
import Industries from "./pages/Industries";
import Communities from "./pages/Communities";

// Who We Are Section
import Investors from "./pages/Investors";
import Board from "./pages/Board";
import Staff from "./pages/Staff";
import Partners from "./pages/Partners";
import Foundation from "./pages/Foundation";

// What We Do Section
import Utilities from "./pages/Utilities";
import Demographics from "./pages/Demographics";
import Infrastructure from "./pages/Infrastructure";
import MajorEmployers from "./pages/MajorEmployers";
import Workforce from "./pages/Workforce";
import SBDC from "./pages/SBDC";
import DMC from "./pages/DMC";
import EDC from "./pages/EDC";
import RAVE from "./pages/RAVE";
import RealEstate from "./pages/RealEstate";
import Taxes from "./pages/Taxes";

// Why Rochester Section
import Education from "./pages/Education";
import ThingsToDo from "./pages/ThingsToDo";
import QualityOfLife from "./pages/QualityOfLife";

// News & Publications Section
import Events from "./pages/Events";
import AnnualReports from "./pages/AnnualReports";
import EBlasts from "./pages/EBlasts";
import QuarterlyReports from "./pages/QuarterlyReports";
import CommunityProfile from "./pages/CommunityProfile";
import Newsletter from "./pages/Newsletter";

// Community Pages
import Byron from "./pages/communities/Byron";
import Chatfield from "./pages/communities/Chatfield";
import Dover from "./pages/communities/Dover";
import Eyota from "./pages/communities/Eyota";
import Kasson from "./pages/communities/Kasson";
import Mantorville from "./pages/communities/Mantorville";
import Oronoco from "./pages/communities/Oronoco";
import PineIsland from "./pages/communities/PineIsland";
import Plainview from "./pages/communities/Plainview";
import Stewartville from "./pages/communities/Stewartville";
import RochesterCity from "./pages/communities/Rochester";

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/why-rochester" component={WhyRochester} />
      <Route path="/contact" component={Contact} />
      <Route path="/property-search" component={PropertySearch} />
      <Route path="/business-funding" component={BusinessFunding} />
      <Route path="/business-resources" component={BusinessResources} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/:industry" component={Industries} />
      <Route path="/communities" component={Communities} />
      
      {/* Who We Are Section */}
      <Route path="/investors" component={Investors} />
      <Route path="/board" component={Board} />
      <Route path="/staff" component={Staff} />
      <Route path="/partners" component={Partners} />
      <Route path="/foundation" component={Foundation} />
      
      {/* What We Do Section */}
      <Route path="/utilities" component={Utilities} />
      <Route path="/demographics" component={Demographics} />
      <Route path="/infrastructure" component={Infrastructure} />
      <Route path="/major-employers" component={MajorEmployers} />
      <Route path="/workforce" component={Workforce} />
      <Route path="/sbdc" component={SBDC} />
      <Route path="/dmc" component={DMC} />
      <Route path="/edc" component={EDC} />
      <Route path="/rave" component={RAVE} />
      <Route path="/real-estate" component={RealEstate} />
      <Route path="/taxes" component={Taxes} />
      
      {/* Why Rochester Section */}
      <Route path="/education" component={Education} />
      <Route path="/things-to-do" component={ThingsToDo} />
      <Route path="/quality-of-life" component={QualityOfLife} />
      
      {/* Community Pages */}
      <Route path="/communities/byron" component={Byron} />
      <Route path="/communities/chatfield" component={Chatfield} />
      <Route path="/communities/dover" component={Dover} />
      <Route path="/communities/eyota" component={Eyota} />
      <Route path="/communities/kasson" component={Kasson} />
      <Route path="/communities/mantorville" component={Mantorville} />
      <Route path="/communities/oronoco" component={Oronoco} />
      <Route path="/communities/pine-island" component={PineIsland} />
      <Route path="/communities/plainview" component={Plainview} />
      <Route path="/communities/stewartville" component={Stewartville} />
      <Route path="/communities/rochester" component={RochesterCity} />
      
      {/* News & Publications Section */}
      <Route path="/news" component={News} />
      <Route path="/events" component={Events} />
      <Route path="/annual-reports" component={AnnualReports} />
      <Route path="/e-blasts" component={EBlasts} />
      <Route path="/quarterly-reports" component={QuarterlyReports} />
      <Route path="/community-profile" component={CommunityProfile} />
      <Route path="/newsletter" component={Newsletter} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
