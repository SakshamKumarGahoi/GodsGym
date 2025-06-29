import React from 'react';

function Plans() {
  const planData = [
    {
      title: "1 Month",
      price: "₹2,000",
      features: ["Unlimited Gym Access", "Personalized Guidance", "Modern Equipment"],
    },
    {
      title: "3 Months",
      price: "₹5,000",
      features: ["Unlimited Gym Access", "Personalized Guidance", "Modern Equipment", "1 Diet Chart"],
    },
    {
      title: "6 Months",
      price: "₹10,000",
      popular: true,
      features: [
        "Unlimited Gym Access",
        "Personalized Guidance",
        "Modern Equipment",
        "1 Free Diet Consultation",
        "Body Composition Tracking",
      ],
    },
    {
      title: "12 Months",
      price: "₹18,000",
      features: [
        "Unlimited Gym Access",
        "Personalized Guidance",
        "Modern Equipment",
        "2 Free Diet Consultations",
        "Full Year Body Assessment",
      ],
    },
  ];

  const timings = [
    {
      day: "Monday - Saturday",
      morning: "7:00 AM - 11:00 AM",
      evening: "4:00 PM - 11:00 PM",
    },
    {
      day: "Sunday",
      morning: "7:00 AM - 11:00 AM",
      evening: "Closed",
    },
  ];

  return (
    <div className="container section text-light">
      <h2 className="highlight text-center mb-5">Plans & Pricing</h2>

      <div className="row justify-content-center gy-4">
        {planData.map((plan, index) => (
          <div className="col-md-3" key={index}>
            <div
              className={`card bg-dark h-100 text-center shadow-sm position-relative pricing-card hover-zoom`}
              style={{
                border: plan.popular ? '3px solid #ffe066' : '2px solid #444',
                borderRadius: 16,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {plan.popular && (
                <div
                  className="position-absolute top-0 start-50 translate-middle badge bg-warning text-dark fw-bold"
                  style={{ zIndex: 1, padding: '6px 12px', borderRadius: '0 0 8px 8px' }}
                >
                  ★ Popular
                </div>
              )}
              <div className="card-body d-flex flex-column">
                <h4 className="highlight mb-2">{plan.title}</h4>
                <h2 className="mb-3" style={{ color: '#ffe066', fontWeight: 'bold' }}>{plan.price}</h2>
                <ul className="list-unstyled mb-4 text-start px-3" style={{ flexGrow: 1 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2" style={{ fontSize: '1rem', color: '#ddd' }}>
                      • {feature}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className="btn btn-yellow w-100 mt-auto">Join Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timings Section */}
      <div
        className="bg-dark p-4 rounded mx-auto mt-5"
        style={{ maxWidth: 1000, border: '2px solid #ffe066' }}
      >
        <h4 className="highlight text-center mb-4">Timings</h4>
        <div className="d-flex flex-column gap-3">
          {timings.map((slot, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center bg-black px-4 py-4 rounded"
              style={{
                border: '1px solid #ffe066',
                minHeight: 100,
                fontSize: '1.1rem',
              }}
            >
              <span style={{ color: '#ffe066', fontWeight: 'bold', width: '30%' }}>{slot.day}</span>
              <span style={{ color: '#f5f5f5', width: '35%', textAlign: 'center' }}>{slot.morning}</span>
              <span style={{ color: '#f5f5f5', width: '35%', textAlign: 'center' }}>{slot.evening}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plans;
