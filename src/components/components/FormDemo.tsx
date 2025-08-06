import React, { useState } from 'react'
import { Search, Filter, Calendar, MapPin } from 'lucide-react'

const FormDemo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')

  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Advanced Form Elements</h3>
        <p className="text-secondary-600">
          Complex form patterns with enhanced user experience and accessibility.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="card">
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Search & Filters</h4>
            
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                <input
                  type="text"
                  className="input pl-10"
                  placeholder="Search products, articles, or users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                  <input
                    type="date"
                    className="input pl-10"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                  <select
                    className="input pl-10 appearance-none"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                  >
                    <option value="">All Locations</option>
                    <option value="ny">New York</option>
                    <option value="sf">San Francisco</option>
                    <option value="la">Los Angeles</option>
                  </select>
                </div>
              </div>
              
              <button className="btn-outline w-full">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </button>
            </div>
          </div>
          
          <div className="card">
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Radio Groups</h4>
            
            <fieldset>
              <legend className="text-sm font-medium text-secondary-700 mb-3">Notification Preferences</legend>
              <div className="space-y-3">
                {['All notifications', 'Important only', 'None'].map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="notifications"
                      value={option.toLowerCase().replace(' ', '-')}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300"
                    />
                    <span className="ml-3 text-sm text-secondary-700">{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="card">
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Textarea & File Upload</h4>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input resize-none"
                  placeholder="Tell us about your project..."
                />
                <div className="mt-2 text-xs text-secondary-500">
                  Maximum 500 characters
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Upload Files
                </label>
                <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                  <div className="space-y-2">
                    <div className="text-secondary-600">
                      <span className="font-medium text-primary-600">Click to upload</span> or drag and drop
                    </div>
                    <div className="text-xs text-secondary-500">
                      PNG, JPG, PDF up to 10MB
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary-50 rounded-xl p-6">
            <h5 className="font-medium text-secondary-900 mb-3">Form Best Practices</h5>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>• Use clear, descriptive labels</li>
              <li>• Provide helpful placeholder text</li>
              <li>• Validate inputs in real-time when possible</li>
              <li>• Show clear error messages near the relevant field</li>
              <li>• Use appropriate input types (email, tel, date, etc.)</li>
              <li>• Group related fields with fieldsets</li>
              <li>• Provide progress indicators for multi-step forms</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormDemo