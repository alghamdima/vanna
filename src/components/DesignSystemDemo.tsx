import React from 'react'
import { Palette, Layout, Type, Zap } from 'lucide-react'
import ColorPalette from './design/ColorPalette'
import TypographyDemo from './design/TypographyDemo'
import SpacingDemo from './design/SpacingDemo'

const DesignSystemDemo: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
          <Zap className="w-4 h-4" />
          <span>Modern UI/UX Design System</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 text-balance">
          Build Beautiful, 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600"> Accessible</span> Interfaces
        </h1>
        
        <p className="text-xl text-secondary-600 max-w-3xl mx-auto text-balance">
          A comprehensive design system that prioritizes user experience, accessibility, and modern design principles. 
          Perfect for web applications, dashboards, and digital products.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary px-8 py-3">
            <Layout className="w-5 h-5 mr-2" />
            Explore Components
          </button>
          <button className="btn-outline px-8 py-3">
            <Palette className="w-5 h-5 mr-2" />
            View Guidelines
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card text-center space-y-4 animate-slide-up">
          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto">
            <Layout className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-secondary-900">Responsive Design</h3>
          <p className="text-secondary-600">
            Mobile-first approach with fluid layouts that adapt seamlessly across all device sizes.
          </p>
        </div>
        
        <div className="card text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mx-auto">
            <Type className="w-6 h-6 text-success-600" />
          </div>
          <h3 className="text-xl font-semibold text-secondary-900">WCAG 2.1 AA</h3>
          <p className="text-secondary-600">
            Full accessibility compliance with proper contrast ratios, keyboard navigation, and screen reader support.
          </p>
        </div>
        
        <div className="card text-center space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto">
            <Palette className="w-6 h-6 text-accent-600" />
          </div>
          <h3 className="text-xl font-semibold text-secondary-900">Design Tokens</h3>
          <p className="text-secondary-600">
            Consistent color system, typography scale, and spacing grid for maintainable designs.
          </p>
        </div>
      </section>

      {/* Design System Elements */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-secondary-900">Design Foundation</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Our design system is built on carefully crafted foundations that ensure consistency and scalability.
          </p>
        </div>
        
        <div className="space-y-16">
          <ColorPalette />
          <TypographyDemo />
          <SpacingDemo />
        </div>
      </section>
    </div>
  )
}

export default DesignSystemDemo