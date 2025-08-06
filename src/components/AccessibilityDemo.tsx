import React, { useState } from 'react'
import { Eye, Keyboard, Volume2, MousePointer, CheckCircle } from 'lucide-react'

const AccessibilityDemo: React.FC = () => {
  const [focusedElement, setFocusedElement] = useState<string | null>(null)

  return (
    <div className="space-y-16 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-secondary-900">Accessibility Features</h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          WCAG 2.1 AA compliant design ensuring your application is usable by everyone.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900">Visual Accessibility</h3>
                <p className="text-sm text-secondary-600">Color contrast and visual clarity</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">Contrast Ratios</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-primary-600 text-white rounded-lg">
                    <span>Primary on White</span>
                    <span className="badge bg-success-100 text-success-800">4.5:1 ✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary-700 text-white rounded-lg">
                    <span>Text on Background</span>
                    <span className="badge bg-success-100 text-success-800">7.2:1 ✓</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">Color Independence</h4>
                <div className="flex items-center space-x-2 p-3 bg-warning-50 border border-warning-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-warning-600" />
                  <span className="text-sm text-warning-700">
                    Information conveyed with icons, not just color
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
                <Keyboard className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900">Keyboard Navigation</h3>
                <p className="text-sm text-secondary-600">Full keyboard accessibility</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-secondary-600 mb-4">
                Try navigating with Tab, Enter, and arrow keys:
              </p>
              
              <div className="space-y-2">
                {['Button 1', 'Button 2', 'Button 3'].map((label, index) => (
                  <button
                    key={label}
                    className={`btn-outline w-full text-left ${
                      focusedElement === label ? 'ring-2 ring-primary-500' : ''
                    }`}
                    onFocus={() => setFocusedElement(label)}
                    onBlur={() => setFocusedElement(null)}
                  >
                    {label}
                    {focusedElement === label && (
                      <span className="ml-2 text-xs text-primary-600">(Focused)</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-success-100 rounded-xl flex items-center justify-center">
                <Volume2 className="w-5 h-5 text-success-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900">Screen Reader Support</h3>
                <p className="text-sm text-secondary-600">Semantic HTML and ARIA labels</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">ARIA Labels</h4>
                <div className="space-y-2">
                  <button 
                    className="btn-primary"
                    aria-label="Add new item to your shopping cart"
                  >
                    Add to Cart
                  </button>
                  <p className="text-xs text-secondary-500 font-mono">
                    aria-label="Add new item to your shopping cart"
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">Live Regions</h4>
                <div className="p-3 bg-secondary-50 rounded-lg">
                  <div aria-live="polite" aria-atomic="true">
                    <span className="text-sm text-secondary-700">
                      Status updates are announced to screen readers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-warning-100 rounded-xl flex items-center justify-center">
                <MousePointer className="w-5 h-5 text-warning-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-secondary-900">Touch & Interaction</h3>
                <p className="text-sm text-secondary-600">Accessible touch targets</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-secondary-900 mb-2">Minimum Touch Targets</h4>
                <div className="grid grid-cols-3 gap-3">
                  <button className="btn-primary h-12 w-full">44px min</button>
                  <button className="btn-outline h-12 w-full">Touch Safe</button>
                  <button className="btn-ghost h-12 w-full">Accessible</button>
                </div>
                <p className="text-xs text-secondary-500 mt-2">
                  All interactive elements meet 44px minimum size requirement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary-50 rounded-xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <CheckCircle className="w-6 h-6 text-success-600" />
          <h3 className="text-xl font-semibold text-secondary-900">WCAG 2.1 AA Compliance</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h4 className="font-medium text-secondary-900 mb-2">Perceivable</h4>
            <ul className="space-y-1 text-sm text-secondary-600">
              <li>• 4.5:1 contrast ratio</li>
              <li>• Scalable text up to 200%</li>
              <li>• Alternative text for images</li>
              <li>• Color-independent information</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-secondary-900 mb-2">Operable</h4>
            <ul className="space-y-1 text-sm text-secondary-600">
              <li>• Full keyboard navigation</li>
              <li>• No seizure-inducing content</li>
              <li>• Sufficient time limits</li>
              <li>• Clear focus indicators</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-secondary-900 mb-2">Understandable</h4>
            <ul className="space-y-1 text-sm text-secondary-600">
              <li>• Clear, simple language</li>
              <li>• Predictable navigation</li>
              <li>• Input assistance</li>
              <li>• Error identification</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-secondary-900 mb-2">Robust</h4>
            <ul className="space-y-1 text-sm text-secondary-600">
              <li>• Valid HTML markup</li>
              <li>• Semantic elements</li>
              <li>• ARIA attributes</li>
              <li>• Cross-browser compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityDemo