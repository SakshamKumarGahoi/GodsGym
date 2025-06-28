import { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      let status = '';
      if (bmi < 18.5) status = 'Underweight';
      else if (bmi < 24.9) status = 'Normal weight';
      else if (bmi < 29.9) status = 'Overweight';
      else status = 'Obesity';
      setResult(`Your BMI: ${bmi.toFixed(1)} (${status})`);
    } else {
      setResult('Please enter valid values.');
    }
  };

  return (
    <div className="container section">
      <h2 className="highlight text-center mb-4">BMI Calculator</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="bg-dark p-4 rounded" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">Weight (kg):</label>
              <input type="number" className="form-control" id="weight" value={weight} onChange={e => setWeight(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="height" className="form-label">Height (cm):</label>
              <input type="number" className="form-control" id="height" value={height} onChange={e => setHeight(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-yellow w-100">Calculate BMI</button>
          </form>
          <div className="text-center mt-3 fs-5">
            {result && <span className={result.includes('BMI') ? 'highlight' : ''}>{result}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
