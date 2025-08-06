import React from 'react'
import { Download, Plus, Settings, Trash2, ExternalLink } from 'lucide-react'

const ButtonDemo: React.FC = () => {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Buttons</h3>
        <p className="text-secondary-600">
          Interactive elements with clear visual hierarchy and accessible focus states.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Button Variants</h4>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Primary
                </button>
                <button className="btn-secondary">
                  <Settings className="w-4 h-4 mr-2" />
                  Secondary
                </button>
                <button className="btn-outline">
                  <Download className="w-4 h-4 mr-2" />
                  Outline
                </button>
                <button className="btn-ghost">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ghost
                </button>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary" disabled>
                  Disabled Primary
                </button>
                <button className="btn-outline" disabled>
                  Disabled Outline
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Button Sizes</h4>
            <div className="flex flex-wrap items-center gap-3">
              <button className="btn-primary text-xs px-3 py-1.5">Small</button>
              <button className="btn-primary">Medium</button>
              <button className="btn-primary px-6 py-3 text-base">Large</button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Destructive Actions</h4>
            <div className="flex flex-wrap gap-3">
              <button className="btn bg-error-600 text-white hover:bg-error-700 focus:ring-error-500">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </button>
              <button className="btn border border-error-300 text-error-700 hover:bg-error-50 focus:ring-error-500">
                Remove
              </button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Interactive States</h4>
            <div className="space-y-3">
              <div className="p-4 bg-secondary-50 rounded-lg">
                <button className="btn-primary mb-2">Hover over me</button>
                <p className="text-sm text-secondary-600">
                  Buttons have smooth hover transitions and clear focus states for keyboard navigation.
                </p>
              </div>
              
              <div className="p-4 bg-secondary-50 rounded-lg">
                <button className="btn-outline mb-2">Tab to focus</button>
                <p className="text-sm text-secondary-600">
                  Focus rings are clearly visible and meet accessibility contrast requirements.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary-50 rounded-xl p-6">
            <h5 className="font-medium text-secondary-900 mb-3">Button Guidelines</h5>
            <ul className="space-y-2 text-sm text-secondary-600">
              <li>• Use primary buttons for main actions (max 1 per screen)</li>
              <li>• Secondary buttons for supporting actions</li>
              <li>• Outline buttons for less important actions</li>
              <li>• Ghost buttons for subtle interactions</li>
              <li>• Always include focus states for accessibility</li>
              <li>• Use icons to enhance clarity, not replace text</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ButtonDemo