import React from 'react'
import { Smartphone, Tablet, Monitor, Maximize } from 'lucide-react'

const ResponsiveDemo: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-secondary-900">Responsive Design</h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Mobile-first approach ensuring optimal experience across all devices and screen sizes.
        </p>
      </div>
      
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">Breakpoint System</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Mobile</h4>
              <p className="text-sm text-secondary-600 mb-3">0px - 640px</p>
              <code className="text-xs bg-secondary-100 px-2 py-1 rounded font-mono">sm:</code>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Tablet className="w-6 h-6 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Tablet</h4>
              <p className="text-sm text-secondary-600 mb-3">640px - 1024px</p>
              <code className="text-xs bg-secondary-100 px-2 py-1 rounded font-mono">md: lg:</code>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-success-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Desktop</h4>
              <p className="text-sm text-secondary-600 mb-3">1024px - 1280px</p>
              <code className="text-xs bg-secondary-100 px-2 py-1 rounded font-mono">xl:</code>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 bg-warning-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Maximize className="w-6 h-6 text-warning-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Large</h4>
              <p className="text-sm text-secondary-600 mb-3">1280px+</p>
              <code className="text-xs bg-secondary-100 px-2 py-1 rounded font-mono">2xl:</code>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">Responsive Patterns</h3>
          <div className="space-y-8">
            <div className="card">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Responsive Grid</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-medium text-secondary-700">Item {item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-secondary-500 mt-3">
                1 column on mobile, 2 on tablet, 4 on desktop
              </p>
            </div>
            
            <div className="card">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Responsive Typography</h4>
              <div className="space-y-4">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary-900">
                  Responsive Heading
                </h1>
                <p className="text-base md:text-lg text-secondary-600">
                  This text scales appropriately across different screen sizes for optimal readability.
                </p>
                <code className="text-xs bg-secondary-100 px-2 py-1 rounded font-mono">
                  text-2xl md:text-4xl lg:text-5xl
                </code>
              </div>
            </div>
            
            <div className="card">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Responsive Navigation</h4>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="btn-primary flex-1">Primary Action</button>
                  <button className="btn-outline flex-1">Secondary Action</button>
                </div>
                <p className="text-sm text-secondary-500">
                  Buttons stack vertically on mobile, side-by-side on larger screens
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-secondary-900 mb-6">Responsive Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-secondary-900 mb-3">Mobile-First Approach</h4>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Design for mobile screens first</li>
                <li>• Progressive enhancement for larger screens</li>
                <li>• Touch-friendly interface elements</li>
                <li>• Simplified navigation on small screens</li>
                <li>• Optimized content hierarchy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-secondary-900 mb-3">Performance Considerations</h4>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Optimize images for different screen densities</li>
                <li>• Use CSS Grid and Flexbox for layouts</li>
                <li>• Minimize layout shifts</li>
                <li>• Test on real devices</li>
                <li>• Consider connection speeds</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg border border-secondary-200">
            <h5 className="font-medium text-secondary-900 mb-2">Testing Checklist</h5>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                  <span className="text-secondary-700">Mobile portrait (320px-480px)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                  <span className="text-secondary-700">Mobile landscape (480px-640px)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                  <span className="text-secondary-700">Tablet (640px-1024px)</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                  <span className="text-secondary-700">Desktop (1024px-1440px)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                  <span className="text-secondary-700">Large screens (1440px+)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success-600" />
                  <span className="text-secondary-700">Touch and keyboard navigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveDemo