import React from 'react'

const SpacingDemo: React.FC = () => {
  const spacingValues = [
    { name: '1', value: '0.25rem', pixels: '4px' },
    { name: '2', value: '0.5rem', pixels: '8px' },
    { name: '3', value: '0.75rem', pixels: '12px' },
    { name: '4', value: '1rem', pixels: '16px' },
    { name: '6', value: '1.5rem', pixels: '24px' },
    { name: '8', value: '2rem', pixels: '32px' },
    { name: '12', value: '3rem', pixels: '48px' },
    { name: '16', value: '4rem', pixels: '64px' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Spacing System</h3>
        <p className="text-secondary-600">
          8px base spacing system for consistent layouts and visual rhythm.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-secondary-900">Spacing Scale</h4>
          <div className="space-y-3">
            {spacingValues.map((spacing) => (
              <div key={spacing.name} className="flex items-center space-x-4">
                <div className="w-16 text-sm font-mono text-secondary-600">
                  {spacing.name}
                </div>
                <div 
                  className="bg-primary-200 rounded"
                  style={{ width: spacing.value, height: '16px' }}
                />
                <div className="text-sm text-secondary-600">
                  {spacing.value} ({spacing.pixels})
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-secondary-900">Usage Examples</h4>
          <div className="space-y-4">
            <div className="card space-y-2">
              <div className="text-sm font-medium text-secondary-900">Card with 24px padding</div>
              <div className="text-xs text-secondary-500 font-mono">p-6 (padding: 1.5rem)</div>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm font-medium text-secondary-900">Stacked elements with 16px gap</div>
              <div className="space-y-4">
                <div className="h-8 bg-secondary-100 rounded"></div>
                <div className="h-8 bg-secondary-100 rounded"></div>
                <div className="h-8 bg-secondary-100 rounded"></div>
              </div>
              <div className="text-xs text-secondary-500 font-mono">space-y-4 (gap: 1rem)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-secondary-900 mb-4">Spacing Guidelines</h4>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h5 className="font-medium text-secondary-900 mb-2">Component Spacing</h5>
            <ul className="space-y-1 text-secondary-600">
              <li>• Internal padding: 12px-24px</li>
              <li>• Button padding: 8px-16px</li>
              <li>• Form elements: 12px vertical</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-secondary-900 mb-2">Layout Spacing</h5>
            <ul className="space-y-1 text-secondary-600">
              <li>• Section gaps: 48px-64px</li>
              <li>• Content blocks: 24px-32px</li>
              <li>• Related elements: 8px-16px</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-secondary-900 mb-2">Responsive Spacing</h5>
            <ul className="space-y-1 text-secondary-600">
              <li>• Mobile: Reduce by 25-50%</li>
              <li>• Tablet: Standard spacing</li>
              <li>• Desktop: Increase for larger screens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpacingDemo