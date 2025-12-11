// src/pages/ThankYou.tsx
export default function ThankYou() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-lg text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank you!</h1>
          <p className="text-lg text-gray-700 mb-6">
            We've received your request and will contact you within 24 hours.
          </p>
          <a
            href="/"
            className="inline-block bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  