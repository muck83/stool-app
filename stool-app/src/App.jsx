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
import Admin from './components/Admin.jsx'

const TABS = [
  { id: 'overview',    label: 'Overview' },
  { id: 'schools',     label: 'My School' },
  { id: 'data',        label: 'Salaries' },
  { id: 'prediction',  label: 'My Move' },
  { id: 'faq',         label: 'Classroom Guide' },
  { id: 'diagnostic',  label: 'Diagnostic' },
  { id: 'cultural',    label: 'Culture' },
  { id: 'financial',   label: 'Financial' },
  { id: 'research',    label: 'Research' },
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

export default function App() {
  if (window.location.pathname === '/admin') return <Admin />
  return (
    <ProfileProvider>
      <AppInner />
    </ProfileProvider>
  )
}
