import React, { useState } from 'react';
import { Car, Package, Wrench, DollarSign, Send, CheckCircle } from 'lucide-react';

const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Vehicle Information
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleVariant: '',
    
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    postcode: '',
    
    // Products & Services
    selectedProducts: [] as string[],
    needsInstallation: false,
    installationLocation: 'instore',
    additionalNotes: ''
  });

  const steps = [
    { id: 1, title: 'Vehicle Info', icon: <Car className="h-5 w-5" /> },
    { id: 2, title: 'Products', icon: <Package className="h-5 w-5" /> },
    { id: 3, title: 'Services', icon: <Wrench className="h-5 w-5" /> },
    { id: 4, title: 'Contact', icon: <DollarSign className="h-5 w-5" /> }
  ];

  const productCategories = [
    { id: 'bull-bars', name: 'Bull Bars', description: 'Protection and style for your front end' },
    { id: 'suspension', name: 'Suspension Upgrades', description: 'Improve ride quality and capability' },
    { id: 'camping', name: 'Camping & Touring', description: 'Awnings, fridges, and touring gear' },
    { id: 'lighting', name: 'LED Lighting', description: 'Light bars, spotlights, and work lights' },
    { id: 'roof-racks', name: 'Roof Racks & Carriers', description: 'Maximize your carrying capacity' },
    { id: 'recovery', name: 'Recovery Equipment', description: 'Winches, straps, and safety gear' },
    { id: 'accessories', name: 'Other Accessories', description: 'Mud flaps, steps, and more' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleProductToggle = (productId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(productId)
        ? prev.selectedProducts.filter(id => id !== productId)
        : [...prev.selectedProducts, productId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you! We\'ll prepare your custom quote and send it within 24 hours.');
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Get Your Custom Quote</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tell us about your vehicle and requirements, and we'll prepare a personalized quote 
              with competitive pricing and expert recommendations.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    currentStep >= step.id 
                      ? 'bg-[#F05A28] text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.id ? <CheckCircle className="h-6 w-6" /> : step.icon}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${
                    currentStep >= step.id ? 'text-[#F05A28]' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded ${
                    currentStep > step.id ? 'bg-[#F05A28]' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Vehicle Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Information</h2>
                  <p className="text-gray-600">Help us find the right accessories for your specific vehicle</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Make *
                    </label>
                    <select
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    >
                      <option value="">Select make</option>
                      <option value="toyota">Toyota</option>
                      <option value="ford">Ford</option>
                      <option value="holden">Holden</option>
                      <option value="nissan">Nissan</option>
                      <option value="mitsubishi">Mitsubishi</option>
                      <option value="mazda">Mazda</option>
                      <option value="isuzu">Isuzu</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Model *
                    </label>
                    <input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Hilux, Ranger, Colorado"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year *
                    </label>
                    <select
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    >
                      <option value="">Select year</option>
                      {Array.from({ length: 15 }, (_, i) => 2025 - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Variant/Trim
                    </label>
                    <input
                      type="text"
                      name="vehicleVariant"
                      value={formData.vehicleVariant}
                      onChange={handleInputChange}
                      placeholder="e.g., SR5, XLT, WorkMate"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Products */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Select Products</h2>
                  <p className="text-gray-600">Choose the accessories you're interested in</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productCategories.map((category) => (
                    <div
                      key={category.id}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.selectedProducts.includes(category.id)
                          ? 'border-[#F05A28] bg-[#F05A28]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleProductToggle(category.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-1 ${
                          formData.selectedProducts.includes(category.id)
                            ? 'border-[#F05A28] bg-[#F05A28]'
                            : 'border-gray-300'
                        }`}>
                          {formData.selectedProducts.includes(category.id) && (
                            <CheckCircle className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{category.name}</h3>
                          <p className="text-sm text-gray-600">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Services */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation Services</h2>
                  <p className="text-gray-600">Let our experts handle the installation</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="needsInstallation"
                      name="needsInstallation"
                      checked={formData.needsInstallation}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-[#F05A28] border-2 border-gray-300 rounded focus:ring-[#F05A28]"
                    />
                    <label htmlFor="needsInstallation" className="text-lg font-semibold text-gray-900">
                      I need professional installation
                    </label>
                  </div>

                  {formData.needsInstallation && (
                    <div className="ml-8 space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Installation Location
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="installationLocation"
                              value="instore"
                              checked={formData.installationLocation === 'instore'}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#F05A28] border-gray-300 focus:ring-[#F05A28]"
                            />
                            <span>At our workshop (Brisbane)</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="installationLocation"
                              value="mobile"
                              checked={formData.installationLocation === 'mobile'}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-[#F05A28] border-gray-300 focus:ring-[#F05A28]"
                            />
                            <span>Mobile installation (additional charges may apply)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your specific requirements, timeline, or any questions you have..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-600">We'll send your custom quote to these details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Postcode
                    </label>
                    <input
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleInputChange}
                      placeholder="For delivery estimates"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F05A28] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#F05A28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E04A1F] transition-colors"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-[#F05A28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E04A1F] transition-colors flex items-center group"
                >
                  Submit Quote Request
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Expert Advice',
              description: 'Our team will recommend the best products for your specific needs and budget.'
            },
            {
              title: 'Competitive Pricing',
              description: 'Get the best prices on premium 4WD accessories with transparent quoting.'
            },
            {
              title: 'Professional Installation',
              description: 'Have your accessories installed by certified technicians with warranty coverage.'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuotePage;