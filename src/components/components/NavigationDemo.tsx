import React, { useState } from 'react'
import { Home, Users, Settings, BarChart3, Bell, ChevronDown, Menu, X } from 'lucide-react'

const NavigationDemo: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Navigation Patterns</h3>
        <p className="text-secondary-600">
          Intuitive navigation structures that guide users through your application.
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-4">Primary Navigation</h4>
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
                <span className="font-semibold text-secondary-900">Dashboard</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="btn-ghost p-2 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full"></span>
                </button>
                
                <div className="flex items-center space-x-2 cursor-pointer">
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full"></div>
                  <ChevronDown className="w-4 h-4 text-secondary-400" />
                </div>
                
                <button 
                  className="btn-ghost p-2 lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === item.id
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </nav>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-4">Tab Navigation</h4>
          <div className="card">
            <div className="border-b border-secondary-200 mb-6">
              <nav className="flex space-x-8">
                {['Overview', 'Analytics', 'Reports', 'Settings'].map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                      tab === 'Overview'
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="space-y-4">
              <h5 className="font-medium text-secondary-900">Overview Content</h5>
              <p className="text-secondary-600">
                This is the content area for the selected tab. Tab navigation provides a clean way to organize related content.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-4">Breadcrumbs</h4>
          <div className="card">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="#" className="text-secondary-500 hover:text-secondary-700">Home</a>
              <span className="text-secondary-400">/</span>
              <a href="#" className="text-secondary-500 hover:text-secondary-700">Products</a>
              <span className="text-secondary-400">/</span>
              <a href="#" className="text-secondary-500 hover:text-secondary-700">Electronics</a>
              <span className="text-secondary-400">/</span>
              <span className="text-secondary-900 font-medium">Headphones</span>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavigationDemo