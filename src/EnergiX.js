import { useState } from "react";
import "./styles.css";  // Global styles
import "./styles.scss"; // SCSS styles

export default function EnergiX() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" });
  const [energyData, setEnergyData] = useState({ dailyConsumption: "", powerHours: "", offGrid: null });
  const [equipmentList, setEquipmentList] = useState([
    { name: "TV", quantity: 1, hours: 0, power: 0 },
    { name: "Light Bulbs", quantity: 1, hours: 0, power: 0 },
    { name: "Fan", quantity: 1, hours: 0, power: 0 },
  ]);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleEnergyChange = (e) => {
    setEnergyData({ ...energyData, [e.target.name]: e.target.value });
  };

  const addEquipment = () => {
    setEquipmentList([...equipmentList, { name: "", quantity: 1, hours: 0, power: 0 }]);
  };
  
  const handleOffGridSelection = (choice) => {
    setEnergyData({ ...energyData, offGrid: choice });
    setStep(choice ? 4 : 5);
  };

  return (
    <div className="container">
      {step === 1 && (
        <div className="step">
          <h2>Enter Your Details</h2>
          <input name="name" placeholder="Full Name" value={userData.name} onChange={handleInputChange} />
          <input name="phone" placeholder="Phone Number" value={userData.phone} onChange={handleInputChange} />
          <input name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
        </div>
      )}
      {step === 2 && (
        <div className="step">
          <h2>Energy Usage</h2>
          <input name="dailyConsumption" placeholder="Daily Energy Consumption (kWh)" value={energyData.dailyConsumption} onChange={handleEnergyChange} />
          <input name="powerHours" placeholder="Daily Power Hours" value={energyData.powerHours} onChange={handleEnergyChange} />
        </div>
      )}
      {step === 3 && (
        <div>
          <p>Step 3: Do you need an Off-Grid Solution?</p>
          <button onClick={() => handleOffGridSelection(true)}>Yes</button>
          <button onClick={() => handleOffGridSelection(false)}>No, Decide Later</button>
        </div>
      )}
      {step === 4 && (
        <div className="step">
          <h2>Equipment List</h2>
          <div className="equipment-header">
            <span className="header-item">Equipment</span>
            <span className="header-item">Quantity</span>
            <span className="header-item">Hours</span>
            <span className="header-item">Power (W)</span>
          </div>
          {equipmentList.map((eq, index) => (
            <div key={index} className="equipment-item">
              <input placeholder="Equipment" value={eq.name} onChange={(e) => {
                let newList = [...equipmentList];
                newList[index].name = e.target.value;
                setEquipmentList(newList);
              }} />
              <input type="number" placeholder="Qty" value={eq.quantity} onChange={(e) => {
                let newList = [...equipmentList];
                newList[index].quantity = e.target.value;
                setEquipmentList(newList);
              }} />
              <input type="number" placeholder="Hours" value={eq.hours} onChange={(e) => {
                let newList = [...equipmentList];
                newList[index].hours = e.target.value;
                setEquipmentList(newList);
              }} />
              <input type="number" placeholder="Power (W)" value={eq.power} onChange={(e) => {
                let newList = [...equipmentList];
                newList[index].power = e.target.value;
                setEquipmentList(newList);
              }} />
            </div>
          ))}
          <button onClick={addEquipment}>+ Add Equipment</button>
          <button onClick={handlePrev}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 5 && (
        <div className="step">
          <h2>Thank You!</h2>
          <p>We have received your request. An email has been sent with further details.</p>
        </div>
      )}
      {step > 1 && step !== 5 && <button onClick={handlePrev}>Back</button>}
      {step < 4 && <button onClick={handleNext}>Next</button>}
    </div>
  );
}
