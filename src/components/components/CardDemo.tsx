import React from 'react'
import { Star, Heart, Share2, MoreHorizontal, TrendingUp, Users, DollarSign } from 'lucide-react'

const CardDemo: React.FC = () => {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Cards & Content</h3>
        <p className="text-secondary-600">
          Flexible card layouts for organizing and presenting content effectively.
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-4">Basic Cards</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h5 className="font-semibold text-secondary-900">Product Card</h5>
                  <p className="text-sm text-secondary-600">Basic information layout</p>
                </div>
                <button className="btn-ghost p-2">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg"></div>
                <div>
                  <h6 className="font-medium text-secondary-900">Premium Headphones</h6>
                  <p className="text-sm text-secondary-600">High-quality audio experience</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-secondary-900">$299</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-warning-500 fill-current" />
                    <span className="text-sm text-secondary-600">4.8</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="btn-primary flex-1">Add to Cart</button>
                  <button className="btn-ghost p-2">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="btn-ghost p-2">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full"></div>
                  <div>
                    <h5 className="font-semibold text-secondary-900">Sarah Johnson</h5>
                    <p className="text-sm text-secondary-600">Product Designer</p>
                  </div>
                </div>
                
                <p className="text-secondary-700">
                  "This design system has transformed how our team builds interfaces. The consistency and accessibility features are outstanding."
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-warning-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-secondary-500">2 days ago</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-secondary-900">Monthly Revenue</h5>
                  <span className="badge-success">+12.5%</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-secondary-900">$24,580</div>
                  <div className="flex items-center text-sm text-success-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +$2,840 from last month
                  </div>
                </div>
                
                <div className="h-20 bg-gradient-to-r from-primary-100 to-primary-200 rounded-lg flex items-end justify-center">
                  <div className="text-xs text-primary-700 mb-2">Chart placeholder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-secondary-900 mb-4">Dashboard Cards</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Total Users</p>
                  <p className="text-2xl font-bold text-secondary-900">12,847</p>
                </div>
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-success-600 font-medium">+8.2%</span>
                <span className="text-secondary-500 ml-2">vs last month</span>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Revenue</p>
                  <p className="text-2xl font-bold text-secondary-900">$89,432</p>
                </div>
                <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-success-600 font-medium">+15.3%</span>
                <span className="text-secondary-500 ml-2">vs last month</span>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600">Growth Rate</p>
                  <p className="text-2xl font-bold text-secondary-900">23.1%</p>
                </div>
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent-600" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-success-600 font-medium">+2.4%</span>
                <span className="text-secondary-500 ml-2">vs last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardDemo