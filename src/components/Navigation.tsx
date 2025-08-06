import React from 'react'

interface NavigationProps {
  sections: Array<{ id: string; label: string; component: React.ComponentType }>
  activeSection: string
  onSectionChange: (section: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onSectionChange }) => {
  return (
    <nav className="fixed top-16 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto py-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeSection === section.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navigation