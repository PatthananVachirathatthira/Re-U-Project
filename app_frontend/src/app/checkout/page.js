'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Checkout() {
  // Mock cart data (replace with context if needed)
  const cartItems = [
    {
      id: 1,
      image: '/mock-shirt.png',
      title: 'Scientific Calculator',
      price: 1000,
    },
    {
      id: 2,
      image: '/mock-shirt2.png',
      title: 'Scientific Calculator',
      price: 1000,
    },
  ];
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    deliveryType: '',
    meetingLocation: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order confirmation logic here
    alert('Order confirmed!');
  };

  return (
    <div className="min-h-screen bg-reu-cream flex items-center justify-center">
      <div className="w-full max-w-6xl h-[700px] bg-transparent flex flex-col md:flex-row items-stretch justify-center shadow-none">
        {/* Left: Form */}
        <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-l-2xl rounded-r-none shadow-xl p-10 flex flex-col gap-8 justify-between h-full min-w-[400px] max-w-[520px]">
          <button type="button" className="self-end border border-reu-red text-reu-red rounded-full px-6 py-2 flex items-center gap-2 font-semibold mb-2">
            Log In <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg></span>
          </button>
          <div className="flex-1 flex flex-col gap-8 overflow-y-auto">
            <div>
              <h2 className="text-2xl font-bold text-reu-red mb-4">Contact</h2>
              <div className="flex flex-col gap-4">
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none" />
                <div className="flex gap-4">
                  <input name="firstName" type="text" value={form.firstName} onChange={handleChange} placeholder="First Name" className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none" />
                  <input name="lastName" type="text" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none" />
                </div>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-reu-red mb-4">Delivery Type</h2>
              <select name="deliveryType" value={form.deliveryType} onChange={handleChange} className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none">
                <option value="">รับเองที่จุดนัดพบ</option>
                <option value="delivery">Delivery</option>
              </select>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-reu-red mb-4">Delivery Detail</h2>
              <select name="meetingLocation" value={form.meetingLocation} onChange={handleChange} className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none">
                <option value="">Meeting Location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
              </select>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-reu-red mb-4">Preferred Time</h2>
              <div className="flex gap-4 mb-4">
                <input name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none" />
                <input name="preferredTime" type="time" value={form.preferredTime} onChange={handleChange} className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none" />
              </div>
              <input name="notes" type="text" value={form.notes} onChange={handleChange} placeholder="Notes for Seller" className="rounded-xl border border-gray-300 px-4 py-3 w-full focus:border-reu-red focus:ring-2 focus:ring-reu-red outline-none" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <Link href="/cart" className="text-reu-red font-semibold hover:underline">&lt; Return to Cart</Link>
            <button type="submit" className="px-8 py-3 rounded-xl bg-[#fa6a5b] text-white font-semibold text-lg shadow-lg hover:bg-[#e65c4d] transition-colors">Confirm & Pay</button>
          </div>
        </form>
        {/* Right: Order Summary */}
        <div className="flex-1 bg-reu-cream rounded-r-2xl rounded-l-none shadow-xl p-10 flex flex-col gap-6 justify-between h-full min-w-[340px] max-w-[420px]">
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-2">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-xl bg-white border" />
                <div className="flex-1">
                  <div className="font-bold text-reu-brown text-lg">{item.title}</div>
                </div>
                <div className="text-reu-brown text-lg font-medium">{item.price}THB</div>
              </div>
            ))}
            <div className="border-t border-reu-brown/20 my-4"></div>
            <div className="flex flex-col gap-2 text-reu-brown text-base">
              <div className="flex justify-between"><span>Subtotal</span><span>{subtotal}THB</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
              <div className="flex justify-between font-bold text-lg mt-2"><span>Total</span><span>{total}THB</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 