import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BuyMeCoffee = () => {
  const [loading, setLoading] = useState(false);
  const [debugMode, setDebugMode] = useState(false);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      // Check if script already exists
      if (window.Razorpay) {
        console.log('✅ Razorpay already loaded');
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      
      script.onload = () => {
        console.log('✅ Razorpay script loaded from CDN');
        resolve(true);
      };
      
      script.onerror = (error) => {
        console.error('❌ Failed to load Razorpay script:', error);
        resolve(false);
      };
      
      // Add timeout to prevent hanging
      setTimeout(() => {
        if (!window.Razorpay) {
          console.error('❌ Razorpay script load timeout');
          resolve(false);
        }
      }, 10000); // 10 second timeout
      
      document.body.appendChild(script);
    });
  };

  const handleCoffeePayment = async () => {
    console.log('🔧 Starting coffee payment...');
    console.log('🌐 Current URL:', window.location.href);
    console.log('🔧 Environment:', import.meta.env.MODE);
    setLoading(true);

    try {
      // For development testing, show a demo modal first
      if (window.location.hostname === 'localhost') {
        const shouldProceed = confirm(`🧪 DEVELOPMENT MODE DETECTED\n\nThis will open Razorpay test payment for ₹100.\n\nTest cards that work:\n• 4111 1111 1111 1111 (Visa)\n• 5555 5555 5555 4444 (Mastercard)\n• Any CVV, any future expiry\n\nProceed with test payment?`);
        
        if (!shouldProceed) {
          setLoading(false);
          return;
        }
      }

      // Load Razorpay script
      console.log('📦 Loading Razorpay script...');
      const res = await loadRazorpayScript();
      if (!res) {
        throw new Error('Razorpay script failed to load. Please check your internet connection.');
      }

      console.log('✅ Razorpay script loaded successfully');

      // Validate Razorpay key
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_SLbQ4FbMJYkxov';
      console.log('🔑 Using Razorpay Key:', razorpayKey);
      
      if (!razorpayKey || !razorpayKey.startsWith('rzp_')) {
        throw new Error('Invalid Razorpay key configuration');
      }

    const options = {
      key: razorpayKey,
      amount: 10000, // ₹100 in paise (100 * 100)
      currency: 'INR',
      name: 'Harsh Omar',
      description: 'Buy Me a Coffee ☕',
      image: 'https://cdn-icons-png.flaticon.com/512/481/481161.png', // Coffee icon from CDN
      handler: function (response) {
        // Payment success
        console.log('🎉 Payment successful:', response);
        alert(`Thank you for the coffee! ☕\n\nPayment ID: ${response.razorpay_payment_id}\n\nYou're awesome! 🎉`);
        setLoading(false);
      },
      prefill: {
        name: 'Coffee Supporter',
        email: 'supporter@example.com',
        contact: '9999999999',
      },
      notes: {
        purpose: 'Buy Me a Coffee',
        amount: '100',
        supporter: 'Portfolio Visitor'
      },
      theme: {
        color: '#D2691E', // Coffee brown color
      },
      modal: {
        ondismiss: function() {
          console.log('💔 Payment cancelled by user');
          setLoading(false);
        },
        escape: true,
        backdropclose: false
      },
      retry: {
        enabled: true,
        max_count: 3
      }
    };

    console.log('🚀 Opening Razorpay checkout with options:', options);

    // Check if Razorpay is available
    if (!window.Razorpay) {
      console.error('❌ Razorpay not found on window object');
      console.log('🔍 Window object keys:', Object.keys(window).filter(k => k.toLowerCase().includes('razor')));
      throw new Error('Razorpay not loaded properly. Please refresh the page and try again.');
    }

    console.log('🔧 Creating Razorpay payment object with options:', {
      ...options,
      key: `${options.key.substring(0, 10)}...` // Hide full key in logs
    });

    try {
      const paymentObject = new window.Razorpay(options);
      
      console.log('✅ Razorpay object created successfully');
      
      // Add comprehensive error handling
      paymentObject.on('payment.failed', function (response) {
        console.error('❌ Payment failed:', response.error);
        const errorMsg = response.error.description || response.error.reason || 'Payment failed';
        alert(`❌ Payment Failed\n\n${errorMsg}\n\nPlease try again or contact support.`);
        setLoading(false);
      });
      
      console.log('🎯 Opening Razorpay modal...');
      paymentObject.open();
      console.log('✅ Razorpay modal opened successfully');
      
    } catch (error) {
      console.error('❌ Error creating/opening Razorpay:', error);
      throw new Error(`Payment initialization failed: ${error.message}`);
    }
    } catch (error) {
      console.error('❌ Payment initialization failed:', error);
      
      // Show detailed error info for debugging
      const errorDetails = `
🚨 PAYMENT ERROR DEBUG INFO:
• Error: ${error.message}
• URL: ${window.location.href}
• Razorpay Available: ${!!window.Razorpay}
• Key Valid: ${razorpayKey?.startsWith('rzp_')}
• Network: ${navigator.onLine ? 'Online' : 'Offline'}

Try refreshing the page or check browser console for details.`;
      
      alert(errorDetails);
      setLoading(false);
    }
  };

  const testRazorpayConnection = async () => {
    console.log('🧪 Testing Razorpay connection...');
    
    try {
      const response = await fetch('https://checkout.razorpay.com/v1/checkout.js');
      console.log('📡 Razorpay CDN Status:', response.status, response.statusText);
      
      const scriptLoaded = await loadRazorpayScript();
      console.log('📦 Script Loading Result:', scriptLoaded);
      console.log('🪟 Window.Razorpay Available:', !!window.Razorpay);
      
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_SLbQ4FbMJYkxov';
      console.log('🔑 Razorpay Key Format Valid:', razorpayKey?.startsWith('rzp_'));
      
      alert(`🧪 TEST RESULTS:\n\n✅ CDN Response: ${response.status}\n✅ Script Loaded: ${scriptLoaded}\n✅ Razorpay Available: ${!!window.Razorpay}\n✅ Key Valid: ${razorpayKey?.startsWith('rzp_')}\n\nCheck console for detailed logs.`);
      
    } catch (error) {
      console.error('🧪 Test failed:', error);
      alert(`🧪 TEST FAILED:\n\n❌ ${error.message}\n\nCheck console for details.`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-500 p-1 rounded-2xl shadow-2xl">
        <button
          onClick={handleCoffeePayment}
          disabled={loading}
          className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
        >
          {/* Coffee Icon SVG */}
          <div className="w-8 h-8 flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-bounce">
              {/* Coffee Cup */}
              <rect x="20" y="35" width="40" height="35" rx="3" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
              <rect x="20" y="30" width="40" height="8" rx="4" fill="#D2691E"/>
              {/* Handle */}
              <path d="M 60 40 Q 70 40 70 50 Q 70 60 60 60" 
                    fill="none" stroke="#8B4513" strokeWidth="3" strokeLinecap="round"/>
              {/* Saucer */}
              <ellipse cx="40" cy="72" rx="25" ry="4" fill="#CD853F"/>
              {/* Steam */}
              <path d="M 30 25 Q 32 15 30 10" fill="none" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
              <path d="M 40 25 Q 42 15 40 10" fill="none" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
              <path d="M 50 25 Q 52 15 50 10" fill="none" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            </svg>
          </div>
          
          <div className="flex flex-col items-start">
            <span className="font-bold text-sm text-gray-800">
              {loading ? 'Processing...' : 'Buy Me a Coffee'}
            </span>
            <span className="text-xs text-gray-600 font-medium">
              ₹100 • Support my work
            </span>
          </div>
        </button>
      </div>
      
      {/* Debug Test Button - only show in development */}
      {typeof window !== 'undefined' && window.location.hostname === 'localhost' && (
        <button
          onClick={testRazorpayConnection}
          className="mt-2 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-xs transition-all duration-300"
        >
          🧪 Test
        </button>
      )}
      
      {/* Pulse effect */}
      {!loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl animate-ping opacity-20 pointer-events-none"></div>
      )}
    </motion.div>
  );
};

export default BuyMeCoffee;