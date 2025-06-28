function Plans() {
  return (
    <div className="container section">
      <h2 className="highlight text-center mb-4">Plans & Timings</h2>
      <div className="row justify-content-center mb-5">
        {/* Pricing Cards */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-center h-100" style={{border: '2px solid #ffe066', borderRadius: 16}}>
            <div className="card-body">
              <h4 className="highlight mb-3">1 Month</h4>
              <h2 className="mb-3" style={{color: '#ffe066', fontWeight: 'bold'}}>₹2,000</h2>
              <ul className="list-unstyled mb-4">
                <li>Unlimited Gym Access</li>
                <li>Personalized Guidance</li>
                <li>Modern Equipment</li>
              </ul>
              <button className="btn btn-yellow w-100">Join Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-center h-100" style={{border: '2px solid #ffe066', borderRadius: 16}}>
            <div className="card-body">
              <h4 className="highlight mb-3">6 Months</h4>
              <h2 className="mb-3" style={{color: '#ffe066', fontWeight: 'bold'}}>₹10,000</h2>
              <ul className="list-unstyled mb-4">
                <li>Unlimited Gym Access</li>
                <li>Personalized Guidance</li>
                <li>Modern Equipment</li>
                <li>1 Free Diet Consultation</li>
              </ul>
              <button className="btn btn-yellow w-100">Join Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-center h-100" style={{border: '2px solid #ffe066', borderRadius: 16}}>
            <div className="card-body">
              <h4 className="highlight mb-3">12 Months</h4>
              <h2 className="mb-3" style={{color: '#ffe066', fontWeight: 'bold'}}>₹18,000</h2>
              <ul className="list-unstyled mb-4">
                <li>Unlimited Gym Access</li>
                <li>Personalized Guidance</li>
                <li>Modern Equipment</li>
                <li>2 Free Diet Consultations</li>
              </ul>
              <button className="btn btn-yellow w-100">Join Now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Timings Section */}
      <div className="bg-dark p-4 rounded mx-auto" style={{maxWidth: 600, border: '2px solid #ffe066'}}>
        <h4 className="highlight text-center mb-3">Timings</h4>
        <div className="d-flex flex-column align-items-center gap-2">
          <div className="w-100 d-flex justify-content-between align-items-center bg-black p-3 rounded" style={{border: '1px solid #ffe066'}}>
            <span style={{color: '#ffe066', fontWeight: 'bold'}}>Monday - Saturday</span>
            <span style={{color: '#f5f5f5'}}>Morning: 7:00 AM - 11:00 AM</span>
            <span style={{color: '#f5f5f5'}}>Evening: 4:00 PM - 11:00 PM</span>
          </div>
          <div className="w-100 d-flex justify-content-between align-items-center bg-black p-3 rounded" style={{border: '1px solid #ffe066'}}>
            <span style={{color: '#ffe066', fontWeight: 'bold'}}>Sunday</span>
            <span style={{color: '#f5f5f5'}}>Morning: 7:00 AM - 11:00 AM</span>
            <span style={{color: '#f5f5f5'}}>Evening: Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
