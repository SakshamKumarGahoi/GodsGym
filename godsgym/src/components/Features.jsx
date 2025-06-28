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
    <div className="container section">
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-dark p-4 rounded flex-grow-1"
            style={{
              minWidth: 250,
              maxWidth: 320,
              border: "2px solid #ffe066",
              color: "#f5f5f5",
              flexBasis: "22%",
            }}
          >
            <h4 className="highlight mb-2">{feature.title}</h4>
            <p style={{ fontSize: "1rem" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
