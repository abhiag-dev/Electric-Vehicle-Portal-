import React from "react";

function FAQ() {
  return (
    <div className="container my-5">
      <div className="content bg-warning p-4 rounded">
        <h2 className="mb-3">Frequently Asked Questions</h2>
        <p className="mb-4">
          Here are a few most asked questions related to electric vehicles:
        </p>

        {/* FAQ list */}
        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="#go">Why would one go for an Electric Car?</a>
          </li>
          <li className="mb-2">
            <a href="#range">What is the range of an EV?</a>
          </li>
          <li className="mb-2">
            <a href="#lifespan">
              What's the Lifespan of an Electric Car Battery?
            </a>
          </li>
          <li className="mb-2">
            <a href="#recharge">How do we recharge an EV?</a>
          </li>
          <li className="mb-2">
            <a href="#dependable">Are Electric Cars Dependable?</a>
          </li>
          <li className="mb-2">
            <a href="#incentives">How do government incentives work for EVs?</a>
          </li>
          <li className="mb-2">
            <a href="#ready">Is India ready for Electric Vehicles?</a>
          </li>
        </ul>

        {/* FAQ sections */}
        <div id="go" className="description mb-4 p-3 bg-white rounded">
          <h3>Why would one go for an Electric Car?</h3>
          <p>
            Electric Cars have many advantages over conventional IC engine
            vehicles, including cleanliness, zero noise, zero tailpipe
            emissions, lower maintenance cost, and more. As more manufacturers
            offer high-performance EVs, selecting them becomes an increasingly
            attractive option.
          </p>
        </div>

        <div id="range" className="description mb-4 p-3 bg-white rounded">
          <h3>What is the range of an EV?</h3>
          <p>
            The range of an EV varies by make and model. Most modern EVs can
            comfortably suit most people's daily journeys. For longer journeys,
            rapid chargers can top up the battery quickly and can often be found
            at motorway service areas, petrol stations, shopping centers, and
            supermarkets.
          </p>
        </div>

        <div id="lifespan" className="description mb-4 p-3 bg-white rounded">
          <h3>What's the Lifespan of an Electric Car Battery?</h3>
          <p>
            The lifespan of an electric car battery depends on the type of
            battery your car uses. While lead-acid batteries may not last long,
            lithium-ion batteries can last up to 10 years or longer.
          </p>
        </div>

        <div id="recharge" className="description mb-4 p-3 bg-white rounded">
          <h3>How do we recharge an EV?</h3>
          <p>
            Electric vehicles can be recharged using home charging, fast
            charging, or charging stations:
          </p>
          <ul>
            <li>Home charging</li>
            <li>Fast charging</li>
            <li>Charging station</li>
          </ul>
        </div>

        <div id="dependable" className="description mb-4 p-3 bg-white rounded">
          <h3>Are Electric Cars Dependable?</h3>
          <p>
            Assuming they are made properly, electric cars can be as dependable
            as gas-powered vehicles. In fact, electric motors have fewer moving
            parts, making them less prone to failure.
          </p>
        </div>

        <div id="incentives" className="description mb-4 p-3 bg-white rounded">
          <h3>How do government incentives work for EVs?</h3>
          <p>
            The Indian government offers financial incentives for purchasing
            electric vehicles. There is a total tax exemption of up to Rs 1.5
            lakh under section 80EEB for EV loans.
          </p>
        </div>

        <div id="ready" className="description mb-4 p-3 bg-white rounded">
          <h3>Is India ready for Electric Vehicles?</h3>
          <p>
            India is ready for electric vehicles due to its existing electric
            locomotive infrastructure and a growing number of manufacturers.
            Prominent manufacturers such as Maruti Suzuki, Hero Electric, and
            Mahindra are already registered electric manufacturers in India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
