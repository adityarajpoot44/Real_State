
import React, { useState } from "react";

const PaymentGateway = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Payment Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Card Holder Name */}
          <div>
            <label className="block text-sm font-medium">Cardholder Name</label>
            <input
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              maxLength="16"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Expiry & CVV */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium">CVV</label>
              <input
                type="password"
                name="cvv"
                maxLength="3"
                value={cardDetails.cvv}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentGateway;
