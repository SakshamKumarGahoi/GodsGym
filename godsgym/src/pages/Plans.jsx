function Plans() {
  return (
    <div className="container section">
      {/* Plans Section */}
      <h2 className="highlight text-center mb-4">Plans & Pricing</h2>
      <div className="row justify-content-center mb-5">
        {[{
          title: "1 Month",
          price: "₹2,000",
          features: ["Unlimited Gym Access", "Personalized Guidance", "Modern Equipment"]
        }, {
          title: "6 Months",
          price: "₹10,000",
          features: ["Unlimited Gym Access", "Personalized Guidance", "Modern Equipment", "1 Free Diet Consultation"]
        }, {
          title: "12 Months",
          price: "₹18,000",
          features: ["Unlimited Gym Access", "Personalized Guidance", "Modern Equipment", "2 Free Diet Consultations"]
        }].map((plan, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card bg-dark text-center h-100 d-flex flex-column justify-content-between"
              style={{ border: '2px solid #ffe066', borderRadius: 16 }}
            >
              <div className="card-body d-flex flex-column">
                <h4 className="highlight mb-3">{plan.title}</h4>
                <h2 className="mb-3" style={{ color: '#ffe066', fontWeight: 'bold' }}>{plan.price}</h2>
                <ul className="list-unstyled mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-3">
                  <a href="/contact" className="btn btn-yellow w-100">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Timings Section - Just a clean gap below Plans */}
      <div className="bg-dark p-4 rounded mx-auto mt-5" style={{ maxWidth: 1000, border: '2px solid #ffe066' }}>
        <h4 className="highlight text-center mb-4">Timings</h4>
        <div className="d-flex flex-column align-items-center gap-3">
          {[
            {
              day: "Monday - Saturday",
              morning: "Morning: 7:00 AM - 11:00 AM",
              evening: "Evening: 4:00 PM - 11:00 PM"
            },
            {
              day: "Sunday",
              morning: "Morning: 7:00 AM - 11:00 AM",
              evening: "Evening: Closed"
            }
          ].map((slot, index) => (
            <div
              key={index}
              className="w-100 d-flex justify-content-between align-items-center bg-black px-4 py-4 rounded"
              style={{
                border: '1px solid #ffe066',
                width: '100%',
                minHeight: 100,
                fontSize: '1.1rem'
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
