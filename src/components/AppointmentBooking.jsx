// src/components/AppointmentBooking.js
import React, { useState } from 'react';
import './AppointmentBooking.css'; // Separate CSS file

const AppointmentBooking = () => {
    // State to manage form inputs
    const [patientName, setPatientName] = useState('');
    const [doctor, setDoctor] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [message, setMessage] = useState('');

    // Dummy list of doctors (you would likely fetch this from your backend)
    const doctors = [
        { id: 'dr-pankaj', name: 'Dr. Pankaj Jain (General Physician)' },
        { id: 'dr-faisal', name: 'Dr. Faisal Shadab (General Physician)' },
        { id: 'dr-vipin', name: 'Dr. Vipin Deo Timari (Pulmonologist)' },
        { id: 'dr-nidhi', name: 'Dr. Nidhi Yadav (Gynecologist)' },
        { id: 'dr-madan', name: 'Dr. Madan Mohan Jha (General Surgeon)' },
        { id: 'dr-raman', name: 'Dr. Raman Jindal (Orthopedic Surgeon)' },
        { id: 'dr-sanjeev', name: 'Dr. Sanjeev Kumar Dubey (Nephrologist)' },
        { id: 'dr-rb', name: 'Dr. R.B. Singh (Cardiologist)' },
        { id: 'dr-akshi', name: 'Dr. Akshi Singhal (ENT Specialist)' },
        { id: 'dr-archit', name: 'Dr. Archit Singhal (Physiotherapist)' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Basic validation
        if (!patientName || !doctor || !appointmentDate || !appointmentTime) {
            setMessage('Please fill in all fields.');
            return;
        }

        const appointmentData = {
            patientName,
            doctor,
            appointmentDate,
            appointmentTime,
        };

        console.log('Booking Data:', appointmentData); // For debugging

        try {
            // --- यहाँ आपको अपने बैकएंड API का लिंक जोड़ना होगा ---
            const backendApiUrl = 'YOUR_BACKEND_API_ENDPOINT_HERE'; // उदाहरण: 'https://your-backend.com/api/book-appointment'

            const response = await fetch(backendApiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // यदि आवश्यक हो तो ऑथराइजेशन हेडर जोड़ें
                    // 'Authorization': 'Bearer YOUR_AUTH_TOKEN'
                },
                body: JSON.stringify(appointmentData),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage('Appointment booked successfully! ' + (result.message || ''));
                // Clear the form
                setPatientName('');
                setDoctor('');
                setAppointmentDate('');
                setAppointmentTime('');
            } else {
                const errorData = await response.json();
                setMessage(`Failed to book appointment: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setMessage('An error occurred while booking. Please try again.');
        }
    };

    return (
        <div className="appointment-container">
            <h2>Book Your Appointment</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="patientName">Patient Name:</label>
                    <input
                        type="text"
                        id="patientName"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="doctor">Select Doctor:</label>
                    <select
                        id="doctor"
                        value={doctor}
                        onChange={(e) => setDoctor(e.target.value)}
                        required
                    >
                        <option value="">-- Choose a Doctor --</option>
                        {doctors.map((doc) => (
                            <option key={doc.id} value={doc.id}>
                                {doc.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="appointmentDate">Appointment Date:</label>
                    <input
                        type="date"
                        id="appointmentDate"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="appointmentTime">Appointment Time:</label>
                    <input
                        type="time"
                        id="appointmentTime"
                        value={appointmentTime}
                        onChange={(e) => setAppointmentTime(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Book Appointment</button>
            </form>
        </div>
    );
};

export default AppointmentBooking;