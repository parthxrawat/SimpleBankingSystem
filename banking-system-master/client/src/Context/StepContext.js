import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Create context
export const multiStepContext = createContext();

// Context provider component
export  function StepContext(props) {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({});
    const [finalData, setFinalData] = useState([]);
    const [transferData, setTransferData] = useState({});

    const submitData = async () => {
        try {
            setFinalData((prevData) => [...prevData, userData]);
            console.log(userData);
            await axios.post("http://localhost:5000/api/add", userData);
            setUserData({});
            setCurrentStep(1);
            navigate("/customers");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    const sendMoney = async () => {
        try {
            await axios.post("http://localhost:5000/api/customer/money", transferData);
            navigate("/customers");
        } catch (error) {
            console.error("Error sending money:", error);
        }
    };

    return (
        <multiStepContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                userData,
                setUserData,
                finalData,
                setFinalData,
                submitData,
                transferData,
                setTransferData,
                sendMoney
            }}
        >
            {props.children}
        </multiStepContext.Provider>
    );
}
