import React, { useState } from 'react'
import ButtonDemo from './components/ButtonDemo'
import FormDemo from './components/FormDemo'
import CardDemo from './components/CardDemo'
import NavigationDemo from './components/NavigationDemo'
import FeedbackDemo from './components/FeedbackDemo'

const ComponentShowcase: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-secondary-900">Component Library</h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Reusable components built with accessibility and user experience in mind.
        </p>
      </div>
      
      <div className="space-y-16">
        <ButtonDemo />
        <FormDemo />
        <CardDemo />
        <NavigationDemo />
        <FeedbackDemo />
      </div>
    </div>
  )
}

export default ComponentShowcase