'use client';
import React, { useEffect, useState } from 'react'

const EditGrade = (props) => {
    const [gradeDetails, setGradeDetails] = useState({
        details: '',
        ignoreLateArrival: false,
        ignoreEarlyDeparture: false,
        active: false
    });

    // Function to fetch the grade details from API
    // This needs to be updated with actual API endpoint and request method
    const fetchGradeDetails = async (id) => {
        const response = await fetch('/api/grade/' + id);
        const data = await response.json();
        setGradeDetails(data);
    }

    // On component mount, fetch the grade details
    useEffect(() => {
        fetchGradeDetails(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setGradeDetails({
            ...gradeDetails,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Update the grade via API
        // This needs to be updated with actual API endpoint and request method
        const response = await fetch('/api/grade/' + props.match.params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gradeDetails)
        });
        const data = await response.json();

        if (data.success) {
            // Optionally, redirect to grades list after successful update
            props.history.push('/grades');
        } else {
            // Handle errors
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Details:
                <input
                    type="text"
                    name="details"
                    value={gradeDetails.details}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Ignore Late Arrival:
                <input
                    type="checkbox"
                    name="ignoreLateArrival"
                    checked={gradeDetails.ignoreLateArrival}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Ignore Early Departure:
                <input
                    type="checkbox"
                    name="ignoreEarlyDeparture"
                    checked={gradeDetails.ignoreEarlyDeparture}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Active:
                <input
                    type="checkbox"
                    name="active"
                    checked={gradeDetails.active}
                    onChange={handleInputChange}
                />
            </label>

            <input type="submit" value="Update Grade" />
        </form>
    )
}

export default EditGrade
