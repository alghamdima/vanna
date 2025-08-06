import React from 'react'
import { Heart, Code, Palette } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-secondary-900">Design System</span>
            </div>
            <p className="text-sm text-secondary-600">
              A comprehensive UI/UX design system built for modern web applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Components</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Accessibility</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary-900 mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li><a href="#" className="hover:text-secondary-900 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-secondary-900 transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-secondary-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-error-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary-500" />
            <span>for better user experiences</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-secondary-500">
            © 2025 Design System. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer