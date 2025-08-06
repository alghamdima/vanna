import React from 'react'

const ColorPalette: React.FC = () => {
  const colorGroups = [
    {
      name: 'Primary',
      description: 'Main brand colors for primary actions and key elements',
      colors: [
        { name: '50', value: '#f0f9ff', class: 'bg-primary-50' },
        { name: '100', value: '#e0f2fe', class: 'bg-primary-100' },
        { name: '200', value: '#bae6fd', class: 'bg-primary-200' },
        { name: '300', value: '#7dd3fc', class: 'bg-primary-300' },
        { name: '400', value: '#38bdf8', class: 'bg-primary-400' },
        { name: '500', value: '#0ea5e9', class: 'bg-primary-500' },
        { name: '600', value: '#0284c7', class: 'bg-primary-600' },
        { name: '700', value: '#0369a1', class: 'bg-primary-700' },
        { name: '800', value: '#075985', class: 'bg-primary-800' },
        { name: '900', value: '#0c4a6e', class: 'bg-primary-900' },
      ]
    },
    {
      name: 'Secondary',
      description: 'Neutral colors for text, backgrounds, and subtle elements',
      colors: [
        { name: '50', value: '#f8fafc', class: 'bg-secondary-50' },
        { name: '100', value: '#f1f5f9', class: 'bg-secondary-100' },
        { name: '200', value: '#e2e8f0', class: 'bg-secondary-200' },
        { name: '300', value: '#cbd5e1', class: 'bg-secondary-300' },
        { name: '400', value: '#94a3b8', class: 'bg-secondary-400' },
        { name: '500', value: '#64748b', class: 'bg-secondary-500' },
        { name: '600', value: '#475569', class: 'bg-secondary-600' },
        { name: '700', value: '#334155', class: 'bg-secondary-700' },
        { name: '800', value: '#1e293b', class: 'bg-secondary-800' },
        { name: '900', value: '#0f172a', class: 'bg-secondary-900' },
      ]
    },
    {
      name: 'Success',
      description: 'Positive feedback, confirmations, and success states',
      colors: [
        { name: '100', value: '#dcfce7', class: 'bg-success-100' },
        { name: '500', value: '#22c55e', class: 'bg-success-500' },
        { name: '700', value: '#15803d', class: 'bg-success-700' },
      ]
    },
    {
      name: 'Warning',
      description: 'Caution states and important notifications',
      colors: [
        { name: '100', value: '#fef3c7', class: 'bg-warning-100' },
        { name: '500', value: '#f59e0b', class: 'bg-warning-500' },
        { name: '700', value: '#b45309', class: 'bg-warning-700' },
      ]
    },
    {
      name: 'Error',
      description: 'Error states, destructive actions, and critical alerts',
      colors: [
        { name: '100', value: '#fee2e2', class: 'bg-error-100' },
        { name: '500', value: '#ef4444', class: 'bg-error-500' },
        { name: '700', value: '#b91c1c', class: 'bg-error-700' },
      ]
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Color System</h3>
        <p className="text-secondary-600">
          Our color palette provides semantic meaning and ensures proper contrast ratios for accessibility.
        </p>
      </div>
      
      <div className="space-y-8">
        {colorGroups.map((group) => (
          <div key={group.name} className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-secondary-900">{group.name}</h4>
              <p className="text-sm text-secondary-600">{group.description}</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {group.colors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div 
                    className={`${color.class} h-16 rounded-lg border border-secondary-200 transition-transform hover:scale-105 cursor-pointer`}
                    title={`${group.name}-${color.name}: ${color.value}`}
                  />
                  <div className="text-center">
                    <div className="text-xs font-medium text-secondary-900">{color.name}</div>
                    <div className="text-xs text-secondary-500 font-mono">{color.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorPalette