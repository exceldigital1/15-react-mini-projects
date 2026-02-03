import { useState } from "react";

function OtpGenerator() {
    const [otp, SetOtp] = useState("");

    function generateOtp() {
        const newOtp = Math.floor(1000 + Math.random() * 9000);
        SetOtp(newOtp);
    }


    return (
        <main className="flex flex-col justify-center items-center min-h-screen max-w-md p-4 text-center mx-auto">
            <div className="flex flex-col justify-center items-center p-4 text-center text-white gap-4 bg-gray-700 m-auto w-100 h-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">OTP GENERATOR APP</h2>
                <h3>{otp || "Click Generate OTP button to get OTP"}</h3>
                <p></p>
                <button className="bg-blue-500 p-3 text-xl text-white hover:bg-blue-600" onClick={generateOtp}>Generate OTP</button>
            </div>
        </main>
    )
}

export default OtpGenerator;