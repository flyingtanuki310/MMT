import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Immersion from './components/Immersion';
import Pact from './components/Pact';
import Experience from './components/Experience';
import Constellation from './components/Constellation';
import Team from './components/Team';
import Rejoindre from './components/Rejoindre';
import Footer from './components/Footer';
import ManifestModal from './components/ManifestModal';
import CGVModal from './components/CGVModal';

function App() {
  const [manifestOpen, setManifestOpen] = useState(false);
  const [cgvOpen, setCgvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-mmt-light text-[#1c1917] font-sans selection:bg-mmt-gold selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Philosophy onManifestClick={() => setManifestOpen(true)} />
      <Immersion />
      <Pact />
      <Experience />
      <Constellation />
      <Team />
      <Rejoindre />
      <Footer onManifestClick={() => setManifestOpen(true)} onCGVClick={() => setCgvOpen(true)} />
      <ManifestModal isOpen={manifestOpen} onClose={() => setManifestOpen(false)} />
      <CGVModal isOpen={cgvOpen} onClose={() => setCgvOpen(false)} />
    </div>
  );
}

export default App;
