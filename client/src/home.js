import React from "react";
import homeImage from "./homeimage.jfif";

function Home() {
    return (
        <div className="container my-5">
            <div className="jumbotron text-center bg-light p-5 rounded">
                <h2>Electric Vehicles in India</h2>
                <p>
                    Electric vehicles are quickly gaining popularity in India.
                    Rising fuel prices and government subsidies encourage many to consider electric vehicles. 
                    The development of charging infrastructure is aiding this shift towards cleaner transportation.
                </p>
                <img src={homeImage} alt="A fleet of electric cars" className="img-fluid my-3" />
                <p>
                    The expansion of charging infrastructure demonstrates our progress
                    towards a sustainable future. The market for both four-wheeled and two-wheeled electric vehicles is essential in India. 
                    Although EV technology is currently costly, advancements will soon lead to more affordable options.
                </p>
            </div>

            <div className="my-4 p-4 bg-warning rounded">
                <h3>Reasons to Buy an Electric Vehicle</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Eco-Friendly:</strong> Electric vehicles do not emit CO2 or other pollutants directly, making them a cleaner choice for the environment.
                    </li>
                    <li className="list-group-item">
                        <strong>Excellent Acceleration:</strong> Electric motors offer powerful, smooth, and consistent acceleration.
                    </li>
                    <li className="list-group-item">
                        <strong>Low Maintenance:</strong> Electric vehicles have fewer components and require minimal maintenance, resulting in reduced costs.
                    </li>
                    <li className="list-group-item">
                        <strong>Cost-Effective:</strong> Electric vehicles offer greater efficiency, providing more distance per unit of energy, and are cheaper to operate than fuel-based vehicles.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
