"use client";

import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  payment: "card" | "cash";
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    payment: "card",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("✅ Order placed successfully!");
  };

  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-black mb-6 border-b-4 border-[#FF3811] inline-block">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-8 bg-gray-50 p-6 rounded-lg shadow-lg"
      >
        {/* Billing Details */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Billing Details</h2>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:border-[#FF3811] focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:border-[#FF3811] focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:border-[#FF3811] focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:border-[#FF3811] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:border-[#FF3811] focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Your Order</h2>
          <div className="bg-white border border-gray-200 rounded p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span>Engine Oil Change</span>
              <span>$20.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Battery Charge</span>
              <span>$20.00</span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-2 font-bold">
              <span>Total</span>
              <span>$40.00</span>
            </div>
          </div>

          {/* Payment Method */}
          <h2 className="text-xl font-semibold text-black mb-2">Payment Method</h2>
          <div className="mb-4">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={formData.payment === "card"}
                onChange={handleChange}
                className="mr-2"
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={formData.payment === "cash"}
                onChange={handleChange}
                className="mr-2"
              />
              Cash on Delivery
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF3811] hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
