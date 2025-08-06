import React, { useState } from 'react'
import { CheckCircle, AlertCircle, Info, X, Loader2 } from 'lucide-react'

const FeedbackDemo: React.FC = () => {
  const [showToast, setShowToast] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Feedback & States</h3>
        <p className="text-secondary-600">
          Clear communication of system status and user feedback.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Alerts & Notifications</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-success-50 border border-success-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-success-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-success-900">Success</h5>
                  <p className="text-sm text-success-700">Your changes have been saved successfully.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-warning-50 border border-warning-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-warning-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-warning-900">Warning</h5>
                  <p className="text-sm text-warning-700">Please review your settings before proceeding.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-error-50 border border-error-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-error-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-error-900">Error</h5>
                  <p className="text-sm text-error-700">Unable to save changes. Please try again.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-primary-50 border border-primary-200 rounded-lg">
                <Info className="w-5 h-5 text-primary-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-primary-900">Information</h5>
                  <p className="text-sm text-primary-700">New features are available in your dashboard.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Badges & Status</h4>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="badge-primary">New</span>
                <span className="badge-success">Active</span>
                <span className="badge-warning">Pending</span>
                <span className="badge-error">Inactive</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                  <span className="text-sm text-secondary-700">Server Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                    <span className="text-sm font-medium text-success-700">Online</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg">
                  <span className="text-sm text-secondary-700">Database</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                    <span className="text-sm font-medium text-warning-700">Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Loading States</h4>
            <div className="space-y-4">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-medium text-secondary-900">Data Processing</h5>
                  <button 
                    onClick={handleLoadingDemo}
                    className="btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Start Process'
                    )}
                  </button>
                </div>
                
                {isLoading && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Progress</span>
                      <span className="text-secondary-900 font-medium">65%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full transition-all duration-300" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="h-4 bg-secondary-200 rounded animate-pulse"></div>
                <div className="h-4 bg-secondary-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-secondary-200 rounded animate-pulse w-1/2"></div>
              </div>
              <p className="text-sm text-secondary-500">Skeleton loading placeholder</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Toast Notifications</h4>
            <div className="space-y-4">
              <button 
                onClick={() => setShowToast(true)}
                className="btn-outline"
              >
                Show Toast
              </button>
              
              {showToast && (
                <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
                  <div className="flex items-start space-x-3 p-4 bg-white border border-secondary-200 rounded-lg shadow-lg max-w-sm">
                    <CheckCircle className="w-5 h-5 text-success-600 mt-0.5" />
                    <div className="flex-1">
                      <h5 className="font-medium text-secondary-900">Success!</h5>
                      <p className="text-sm text-secondary-600">Your action was completed successfully.</p>
                    </div>
                    <button 
                      onClick={() => setShowToast(false)}
                      className="text-secondary-400 hover:text-secondary-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbackDemo