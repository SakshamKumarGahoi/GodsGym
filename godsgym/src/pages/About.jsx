import aboutImg from '../assets/about-gym.jpg';

function About() {
  return (
    <div className="container section">
      <h2 className="highlight text-center mb-4">About Us</h2>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-7">
          <p className="lead mb-4 text-md-start text-center">
            Gods Gym aims to bring next generation fitness with top-notch specialized workout facilities and training programs for all members. Our gym offers progressive physical training and resistance formats, state-of-the-art equipment, and an expansive floor for a wide assortment of specialized training programs led by industry professionals.
          </p>
          <p className="lead mb-4 text-md-start text-center">
            More than just a gym, Gods Gym is a way of life. Our vision and mission are to provide the best fitness experience possible under the supervision of highly qualified and experienced professionals. We strive to meet the demand for an upscale gym in our community, offering functional training, fitness bootcamps, body transformation, weight loss, and weight gain programs.
          </p>
          <p className="lead text-md-start text-center">
            Our fitness team possesses exceptional talent, creativity, and genuine professionalism. We prioritize our members' needs and are with them every step of the way to reach their fitness goals.
          </p>
        </div>
        <div className="col-md-5 text-center">
          <img src={aboutImg} alt="Our Gym" style={{maxWidth: '100%', borderRadius: 16, border: '2px solid #ffe066', boxShadow: '0 2px 12px rgba(0,0,0,0.15)'}} />
        </div>
      </div>
    </div>  
  );
}

export default About;
