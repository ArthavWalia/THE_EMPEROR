import React from 'react';
import { Helmet } from 'react-helmet';
import TheEmpireHeader from '@/components/TheEmpireHeader';
import TheEmpireHero from '@/components/TheEmpireHero';
import AboutTheEmpire from '@/components/AboutTheEmpire';
import BenefitsCards from '@/components/BenefitsCards';
import CommunityHighlights from '@/components/CommunityHighlights';
import JoinCTA from '@/components/JoinCTA';
import TheEmpireFooter from '@/components/TheEmpireFooter';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>The Empire - Ultimate Free Games Community</title>
        <meta name="description" content="Join The Empire, the ultimate medieval Discord community for free gaming. Claim legendary titles, get expert recommendations, and pledge your fealty." />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
        <TheEmpireHeader />
        <main>
          <TheEmpireHero />
          <AboutTheEmpire />
          <BenefitsCards />
          <CommunityHighlights />
          <JoinCTA />
        </main>
        <TheEmpireFooter />
      </div>
    </>
  );
}

export default HomePage;