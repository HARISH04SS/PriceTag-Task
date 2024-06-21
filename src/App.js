import React from 'react';
import './App.css';

const plans = [
  {
    name: "FREE",
    price: "$0/month",
    features: [
      "✔ Single User",
      "✔ 50GB Storage",
      "✔ Unlimited Public Projects",
      "✔ Community Access",
      <span style={{opacity:0.5}}>x Unlimited Private Projects</span>,
      <span style={{opacity:0.5}}>x Dedicated Phone Support</span>,
      <span style={{opacity:0.5}}>x Free Subdomain</span>,
      <span style={{opacity:0.5}}>x Monthly Status Reports</span>,
    ],
  },
  {
    name: "PLUS",
    price: "$9/month",
    features: [
      "✔ 5 Users",
      "✔ 50GB Storage",
      "✔ Unlimited Public Projects",
      "✔ Community Access",
      "✔ Unlimited Private Projects",
      "✔ Dedicated Phone Support",
      "✔ Free Subdomain",
      <span style={{opacity:0.5}}>x Monthly Status Reports</span>,
    ],
  },
  {
    name: "PRO",
    price: "$49/month",
    features: [
      "✔ Unlimited Users",
      "✔ 50GB Storage",
      "✔ Unlimited Public Projects",
      "✔ Community Access",
      "✔ Unlimited Private Projects",
      "✔ Dedicated Phone Support",
      "✔ Free Subdomain",
      "✔ Monthly Status Reports",
    ],
  },
];

const PlanCard = ({ name, price, features }) => {
  return (
    <div className="card">
      <div className='sp'style={{opacity:0.5}}> {name}</div>
      <h1>{price}</h1>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="button">BUTTON</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="plan-container">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default App;
