import React from "react";

const features = [
  {
    title: "Modern Equipment",
    description:
      "Our modern gym equipment is designed to elevate your workouts, offering a seamless blend of functionality and comfort. Experience the future of fitness today!",
  },
  {
    title: "Healthy Nutrition Plan",
    description:
      "Unlock your fitness potential with our tailored healthy nutrition plan. Our expert nutritionists have crafted a balanced and delicious menu that fuels your body for peak performance.",
  },
  {
    title: "Professional Training Plan",
    description:
      "Transform your fitness journey with our expertly crafted professional training plans. Our certified trainers will guide you through a personalized program designed to meet your goals.",
  },
  {
    title: "Unique to Your Needs",
    description:
      "Fitness solutions as unique as you are. We offer personalized training and wellness plans designed to match your specific goals and unlock your full potential.",
  },
];

function Features() {
  return (
    <div className="container section pt-5 pb-5">
      <h2 className="highlight text-center mb-4">What We Offer</h2>
      <p className="lead text-center mb-5">
        Explore our core features crafted to support your fitness goals.
      </p>

      <div className="row justify-content-center g-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="col-sm-6 col-lg-3"
          >
            <div
              className="bg-dark h-100 p-4 rounded feature-card"
              style={{
                border: "2px solid #ffe066",
                color: "#f5f5f5",
              }}
            >
              <h4 className="highlight mb-3">{feature.title}</h4>
              <p style={{ fontSize: "0.95rem" }}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: scale(1.03);
          box-shadow: 0 0 20px rgba(255, 224, 102, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Features;
