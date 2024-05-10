import React from "react";
import "./demo.css";

function Demo() {
  return (
    <fieldset className="form-fieldset">
      <legend>Registration Form</legend>
      <form>
        <label htmlFor="name">Customer Name:</label>
        <input type="text" id="name" name="name" required />
        <br />

        <div className="address-section">
          <label htmlFor="house">House No.:</label>
          <input type="text" id="house" name="house" />
          <br />
          <label htmlFor="locality">Area:</label>
          <input type="text" id="locality" name="locality" />
          <br />
          <label htmlFor="landmark">Landmark:</label>
          <input type="text" id="landmark" name="landmark" />
          <br />
        </div>

        <div className="location-section">
          <label htmlFor="country-state">State:</label>
          <select id="country-state" name="country-state">
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CH">Chandigarh</option>
            <option value="CT">Chhattisgarh</option>
            <option value="DN">Dadra and Nagar Haveli</option>
            <option value="DD">Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="LA">Ladakh</option>
            <option value="LD">Lakshadweep</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OR">Odisha</option>
            <option value="PY">Puducherry</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TG">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UT">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select>
          <br />

          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
          <br />

          <label htmlFor="pincode">Pincode:</label>
          <input type="number" id="pincode" name="pincode" size="8" />
          <br />
        </div>

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" required />
        <br />

        <div className="gender-section">
          <label>Gender:</label>
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="male" value="male" required />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            required
          />
          <label htmlFor="others">Others</label>
          <input
            type="radio"
            name="gender"
            id="others"
            value="others"
            required
          />
          <br />
        </div>

        <label htmlFor="color">Select your colour:</label>
        <input type="color" id="color" name="colour" />
        <br />

        <div className="date-time-section">
          <label htmlFor="date">Enter a date for trial:</label>
          <input
            type="date"
            id="date"
            name="date"
            min="2024-02-01"
            max="2024-12-31"
            required
          />
          <br />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />
          <br />
        </div>

        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </fieldset>
  );
}

export default Demo;
