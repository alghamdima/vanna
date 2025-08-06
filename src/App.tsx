import React, { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import DesignSystemDemo from './components/DesignSystemDemo'
import ComponentShowcase from './components/ComponentShowcase'
import AccessibilityDemo from './components/AccessibilityDemo'
import ResponsiveDemo from './components/ResponsiveDemo'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'Overview', component: DesignSystemDemo },
    { id: 'components', label: 'Components', component: ComponentShowcase },
    { id: 'accessibility', label: 'Accessibility', component: AccessibilityDemo },
    { id: 'responsive', label: 'Responsive', component: ResponsiveDemo },
  ]

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || DesignSystemDemo

  return (
    <div className="min-h-screen bg-secondary-50">
      <Header />
      <Navigation 
        sections={sections}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ActiveComponent />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App