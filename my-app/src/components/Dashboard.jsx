import React from 'react';

// Component for the feature cards (the three integrated boxes)
const FeatureCard = ({ icon, title, description }) => (
    <div className="
        p-6 text-center flex flex-col items-center
        /* Updated to use blue/indigo for less green */
        bg-gradient-to-br from-cyan-500 to-indigo-800 
        text-white 
    ">
        {/* Changed icon color from blue-600 to a light cyan/blue for contrast */}
        <div className="text-4xl text-cyan-200 mb-4">{icon}</div> 
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        
        {/* Changed description color to a lighter gray for better readability */}
        <p className="text-sm text-gray-200">{description}</p>
    </div>
);

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* MAIN GRADIENT BANNER SECTION - Updated to use blue/indigo for less green */}
            <div className="
                bg-gradient-to-br 
                from-cyan-500 
                to-indigo-800 
                p-20 
                text-white 
                flex 
                flex-col 
                items-center 
                relative 
                overflow-hidden
            ">
                
                {/* 1. AI-Powered Provider Validation badge (Horizontally centered at the top) */}
                <div className="flex justify-center w-full mb-8 absolute top-8">
                    <div className='p-2 px-4 rounded-full border border-white text-sm'> 
                        AI-Powered Provider Validation
                    </div>
                </div>
                
                {/* The main content needs vertical spacing from the top badge */}
                <div className="mt-16 pt-8 flex flex-col items-center">
                    
                    {/* 2. Main Headline */}
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tight mb-8">
                        Automate Provider Directory <br /> Validation
                    </h1>

                    {/* 3. Sub-text */}
                    <p className="text-lg text-center max-w-3xl mb-16">
                        Reduce directory errors from 80% to near-zero with intelligent AI 
                        automation. Validate 200+ providers in under 30 minutes.
                    </p>
                </div>

                {/* 4. Feature Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full -mb-10 relative z-10 ">
                    
                    <FeatureCard 
                        icon="⏱️"
                        title="30 Min Validation"
                        description="Complete validation cycles in under 30 minutes"
                    />
                    
                    <FeatureCard 
                        icon="🎯"
                        title="95%+ Accuracy"
                        description="AI-powered validation with confidence scoring"
                    />
                    
                    <FeatureCard 
                        icon="⚖️"
                        title="Regulatory Ready"
                        description="Automated compliance and audit trails"
                    />
                </div>
            </div>
            <div className="text-center mt-16 pb-20 px-4 md:px-0">
            {/* Header: Upload Provider Data */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                Upload Provider Data
            </h2>
            <p className="text-gray-500 mb-12">
                Upload CSV files or scanned PDFs containing provider information
            </p>

            {/* Main File Upload Drop Zone */}
            <div className="
                max-w-4xl mx-auto p-12 
                border-2 border-dashed border-gray-300 rounded-lg 
                bg-white shadow-md
            ">
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                    {/* Placeholder for an actual upload icon, using an emoji here */}
                    <span>⬆️</span>
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                    Drop files here or click to upload
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                    Supports CSV, PDF, and Excel files - up to 50MB
                </p>

                {/* Select Files Button */}
                <button className="
                    bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 
                    rounded-lg transition duration-150 shadow-md hover:cursor-pointer
                ">
                    Select Files
                </button>

                {/* File Format Icons (Bottom of the box) */}
                <div className="flex justify-center space-x-6 text-gray-500 text-sm mt-8">
                    <div className="flex items-center space-x-1">
                        {/* Placeholder for CSV/Excel icon */}
                        <span className="text-lg">📄</span>
                        <span>CSV / Excel</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        {/* Placeholder for PDF icon */}
                        <span className="text-lg">📰</span>
                        <span>PDF Documents</span>
                    </div>
                </div>
            </div>

            {/* Footer / Info Section */}
            <div className="max-w-4xl mx-auto flex justify-between pt-10 mt-10 text-left border-t border-gray-200">
                {/* Sample Data Format */}
                <div className="w-1/2 pr-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Sample Data Format
                    </h4>
                    <p className="text-gray-500 text-sm">
                        Name, Address, Phone, Specialty, NPI, License Number, Network
                    </p>
                </div>

                {/* What We Validate */}
                <div className="w-1/2 pl-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        What We Validate
                    </h4>
                    <p className="text-gray-500 text-sm">
                        Contact info, credentials, licenses, affiliations, and more
                    </p>
                </div>
            </div>
        </div>
            
        </div>
    );
}

export default Dashboard;