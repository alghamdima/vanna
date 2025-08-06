import React from 'react'
import { Palette, Github, ExternalLink } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary-900">Design System</h1>
              <p className="text-sm text-secondary-600">UI/UX Guidelines & Components</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="btn-ghost">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </button>
            <button className="btn-primary">
              <ExternalLink className="w-4 h-4 mr-2" />
              Documentation
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header