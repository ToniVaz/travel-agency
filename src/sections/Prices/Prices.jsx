import React from "react";

 const MedicalCoveragePricing = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Pricing</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Plan 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-8 w-full md:w-1/3 relative">
            <div className="absolute top-4 right-4 text-sm text-yellow-500 font-semibold">Active</div>
            <h3 className="text-2xl font-bold mb-4">Recruit Basic</h3>
            <p className="text-4xl font-bold mb-2">$17</p>
            <p className="text-gray-500 mb-6">/ month (USD) <br /> $228 billed yearly</p>
            <ul className="text-gray-700 mb-8 space-y-2 text-left">
              <li>✔️ Access to core HR features</li>
              <li>✔️ Employee record management</li>
              <li>✔️ Basic reporting tools</li>
              <li>✔️ Manage up to 10 team members</li>
              <li>❌ Track employee attendance</li>
              <li>❌ Assign and monitor tasks</li>
              <li>❌ Email support</li>
              <li>❌ Simple onboarding process</li>
            </ul>
            <button className="bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition">
              Cancel
            </button>
          </div>

          {/* Plan 2 - DESTACADO */}
          <div className="bg-black text-white rounded-3xl shadow-2xl p-8 w-full md:w-1/3 relative border-4 border-yellow-400">
            <div className="absolute top-4 right-4 text-sm bg-yellow-400 text-black px-2 py-1 rounded-full font-semibold">Save 27%</div>
            <h3 className="text-2xl font-bold mb-4">Talent Pro</h3>
            <p className="text-2xl text-gray-400 line-through">$26</p>
            <p className="text-4xl font-bold mb-2">$19</p>
            <p className="text-gray-400 mb-6">/ month (USD) <br /> $228 billed yearly</p>
            <ul className="text-gray-300 mb-8 space-y-2 text-left">
              <li>✔️ Access to core HR features</li>
              <li>✔️ Employee record management</li>
              <li>✔️ Basic reporting tools</li>
              <li>✔️ Manage up to 10 team members</li>
              <li>✔️ Track employee attendance</li>
              <li>✔️ Assign and monitor tasks</li>
              <li>❌ Email support</li>
              <li>❌ Simple onboarding process</li>
            </ul>
            <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition">
              Start 7-days Free Trial
            </button>
          </div>
</div>
</div>
</section>)}

export default MedicalCoveragePricing