import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProfileProvider, useProfile } from './context/ProfileContext.jsx'
import Onboarding from './components/Onboarding/index.jsx'
import Nav from './components/Nav.jsx'
import ProfileBar from './components/ProfileBar.jsx'
import SharedBanner from './components/SharedBanner.jsx'
import Overview from './components/tabs/Overview.jsx'
import MySchool from './components/tabs/MySchool.jsx'
import Salaries from './components/tabs/Salaries.jsx'
import MyMove from './components/tabs/MyMove.jsx'
import ClassroomGuide from './components/tabs/ClassroomGuide.jsx'
import Diagnostic from './components/tabs/Diagnostic.jsx'
import Culture from './components/tabs/Culture.jsx'
import Financial from './components/tabs/Financial.jsx'
import Research from './components/tabs/Research.jsx'
import About from './components/tabs/About.jsx'
import Admin from './components/Admin.jsx'

// PD Learn pages
import LearnHome from './pages/learn/LearnHome.jsx'
import ModulePage from './pages/learn/ModulePage.jsx'
import DimensionPage from './pages/learn/DimensionPage.jsx'
import ScenariosPage from './pages/learn/ScenariosPage.jsx'
import SimulationPage from './pages/learn/SimulationPage.jsx'
import FinalExamPage from './pages/learn/FinalExamPage.jsx'
import VocabPage from './pages/learn/VocabPage.jsx'
import CulturalVocabPage from './pages/learn/CulturalVocabPage.jsx'

const TABS = [
  { id: 'overview',    label: 'Overview' },
  { id: 'schools',     label: 'My School' },
  { id: 'data',        label: 'Salaries' },
  { id: 'prediction',  label: 'My Move' },
  { id: 'faq',         label: 'Classroom Guide' },
  { id: 'diagnostic',  label: 'Check-up' },
  { id: 'cultural',    label: 'Culture' },
  { id: 'financial',   label: 'Financial' },
  { id: 'research',    label: 'Research' },
  { id: 'about',       label: 'About' },
]

const TAB_COMPONENTS = {
  overview:   Overview,
  schools:    MySchool,
  data:       Salaries,
  prediction: MyMove,
  faq:        ClassroomGuide,
  diagnostic: Diagnostic,
  cultural:   Culture,
  financial:  Financial,
  research:   Research,
  about:      About,
}

function Dashboard() {
  const { activeTab } = useProfile()
  const ActiveComponent = TAB_COMPONENTS[activeTab] || Overview

  return (
    <div>
      <SharedBanner />
      <Nav tabs={TABS} />
      <ProfileBar />
      <ActiveComponent />
    </div>
  )
}

function AppInner() {
  const { showOnboarding } = useProfile()
  return showOnboarding ? <Onboarding /> : <Dashboard />
}

function StoolApp() {
  return (
    <ProfileProvider>
      <AppInner />
    </ProfileProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PD Learn routes */}
        <Route path="/learn" element={<LearnHome />} />
        <Route path="/learn/:slug" element={<ModulePage />} />
        <Route path="/learn/:slug/sim/:simId" element={<SimulationPage />} />
        <Route path="/learn/:slug/scenarios" element={<ScenariosPage />} />
        <Route path="/learn/:slug/exam" element={<FinalExamPage />} />
        <Route path="/learn/:slug/vocab" element={<VocabPage />} />
        <Route path="/learn/:slug/cultural-vocab" element={<CulturalVocabPage />} />
        <Route path="/learn/:slug/:dimension" element={<DimensionPage />} />

        {/* Admin */}
        <Route path="/admin" element={<Admin />} />

        {/* Main stool app — catch-all */}
        <Route path="*" element={<StoolApp />} />
      </Routes>
    </BrowserRouter>
  )
}
