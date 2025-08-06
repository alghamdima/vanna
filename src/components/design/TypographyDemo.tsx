import React from 'react'

const TypographyDemo: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Typography Scale</h3>
        <p className="text-secondary-600">
          Consistent typography hierarchy using Inter font family with optimal line heights and spacing.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-secondary-900">Headings</h4>
          
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-secondary-900">Heading 1</h1>
              <code className="text-sm text-secondary-500 font-mono">text-4xl font-bold</code>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-secondary-900">Heading 2</h2>
              <code className="text-sm text-secondary-500 font-mono">text-3xl font-bold</code>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900">Heading 3</h3>
              <code className="text-sm text-secondary-500 font-mono">text-2xl font-semibold</code>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-secondary-900">Heading 4</h4>
              <code className="text-sm text-secondary-500 font-mono">text-xl font-semibold</code>
            </div>
            
            <div>
              <h5 className="text-lg font-medium text-secondary-900">Heading 5</h5>
              <code className="text-sm text-secondary-500 font-mono">text-lg font-medium</code>
            </div>
            
            <div>
              <h6 className="text-base font-medium text-secondary-900">Heading 6</h6>
              <code className="text-sm text-secondary-500 font-mono">text-base font-medium</code>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-secondary-900">Body Text</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-lg text-secondary-900">Large body text</p>
              <code className="text-sm text-secondary-500 font-mono">text-lg</code>
            </div>
            
            <div>
              <p className="text-base text-secondary-700">Regular body text with optimal readability and line height for comfortable reading experience.</p>
              <code className="text-sm text-secondary-500 font-mono">text-base</code>
            </div>
            
            <div>
              <p className="text-sm text-secondary-600">Small body text for secondary information and captions.</p>
              <code className="text-sm text-secondary-500 font-mono">text-sm</code>
            </div>
            
            <div>
              <p className="text-xs text-secondary-500">Extra small text for labels and metadata.</p>
              <code className="text-sm text-secondary-500 font-mono">text-xs</code>
            </div>
            
            <div>
              <code className="font-mono text-sm bg-secondary-100 px-2 py-1 rounded">Monospace code text</code>
              <div className="text-sm text-secondary-500 font-mono mt-1">font-mono</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-secondary-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-secondary-900 mb-4">Typography Guidelines</h4>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 className="font-medium text-secondary-900 mb-2">Font Weights</h5>
            <ul className="space-y-1 text-secondary-600">
              <li>• Light (300): Minimal use for large displays</li>
              <li>• Regular (400): Body text and paragraphs</li>
              <li>• Medium (500): Emphasized text and labels</li>
              <li>• Semibold (600): Headings and important text</li>
              <li>• Bold (700): Strong emphasis and titles</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-secondary-900 mb-2">Line Heights</h5>
            <ul className="space-y-1 text-secondary-600">
              <li>• Headings: 120% (1.2) for tight spacing</li>
              <li>• Body text: 150% (1.5) for readability</li>
              <li>• Small text: 140% (1.4) for compact layouts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypographyDemo