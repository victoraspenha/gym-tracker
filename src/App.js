import React, { useState } from "react";
import "./App.css";

const workoutPlan = {
  Monday: [
    { name: "Chest Press Machine", sets: 3, reps: 10 },
    { name: "Incline Press Machine", sets: 3, reps: 10 },
    { name: "Cable Crossover", sets: 3, reps: 12 },
    { name: "Pec Deck Machine", sets: 3, reps: 12 },
    { name: "Triceps Pushdown (Rope)", sets: 3, reps: 12 },
    { name: "Overhead Triceps Extension (Cable)", sets: 3, reps: 12 },
    { name: "Lateral Raise Machine", sets: 3, reps: 15 },
    { name: "Shoulder Press Machine", sets: 3, reps: 10 },
    { name: "Front Raise with Cable", sets: 3, reps: 12 },
    { name: "Cable Chest Fly", sets: 3, reps: 12 }
  ],
  Tuesday: [
    { name: "Glute Kickback Machine", sets: 3, reps: 15 },
    { name: "Smith Machine Squat", sets: 4, reps: 10 },
    { name: "Hip Abduction Machine", sets: 3, reps: 12 },
    { name: "Hip Adduction Machine", sets: 3, reps: 12 },
    { name: "Leg Press Machine", sets: 4, reps: 10 },
    { name: "Seated Calf Raise Machine", sets: 3, reps: 15 },
    { name: "Standing Calf Raise", sets: 3, reps: 15 },
    { name: "Leg Curl Machine", sets: 3, reps: 12 },
    { name: "Leg Extension Machine", sets: 3, reps: 12 },
    { name: "Kettlebell Swing", sets: 3, reps: 20 }
  ],
  Thursday: [
    { name: "Seated Row Machine", sets: 3, reps: 10 },
    { name: "Preacher Curl Machine", sets: 3, reps: 12 },
    { name: "Lat Pulldown Machine", sets: 3, reps: 10 },
    { name: "Cable Rear Delt Fly", sets: 3, reps: 15 },
    { name: "Trap Shrug (Cable or Dumbbell)", sets: 3, reps: 15 },
    { name: "Straight Arm Pulldown", sets: 3, reps: 12 },
    { name: "Barbell Curl", sets: 3, reps: 12 },
    { name: "Hammer Curl (Dumbbell)", sets: 3, reps: 12 },
    { name: "Back Extension Machine", sets: 3, reps: 15 },
    { name: "Rope Face Pull", sets: 3, reps: 15 }
  ],
  Friday: [
    { name: "Glute Kickback Machine", sets: 3, reps: 15 },
    { name: "Smith Machine Deadlift", sets: 4, reps: 8 },
    { name: "Trap Bar Deadlift", sets: 3, reps: 10 },
    { name: "Glute Ham Raise (Machine)", sets: 3, reps: 12 },
    { name: "Bulgarian Split Squat", sets: 3, reps: 10 },
    { name: "Walking Lunges (Weighted)", sets: 3, reps: 20 },
    { name: "Reverse Lunge with Dumbbells", sets: 3, reps: 10 },
    { name: "Kettlebell Deadlift", sets: 3, reps: 15 },
    { name: "Hip Thrust Machine", sets: 3, reps: 12 },
    { name: "Standing Cable Kickback", sets: 3, reps: 15 }
  ]
};

function App() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [checkedExercises, setCheckedExercises] = useState({});
  const exercises = workoutPlan[selectedDay] || [];
  const [gymDates, setGymDates] = useState([]);

  const handleAddDate = () => {
    const today = new Date().toLocaleDateString();
    if (!gymDates.includes(today)) {
      setGymDates([...gymDates, today]);
    }
  };

  return (
    <div className="container colorful">
      <div className="summary">
                        <p><em>Reminder: Update your training plan by <strong>September 30, 2025</strong>.</em></p>
      </div>
      <h1 className="title">🏋️ Gym Tracker</h1>

      <div className="day-buttons">
        {Object.keys(workoutPlan).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`day-button ${selectedDay === day ? "active" : ""}`}
          >
            {day}
          </button>
        ))}
      </div>

      <table className="exercise-table">
        <thead>
          <tr>
            <th>Exercise</th>
            
            <th>Sets</th>
            <th>Reps</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((ex, idx) => (
            <tr key={idx} className={checkedExercises[`${selectedDay}-${idx}`] ? "checked-row" : ""}>
              <td>{ex.name}</td>
              
              <td>{ex.sets}</td>
              <td>{ex.reps}</td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setCheckedExercises((prev) => ({
                      ...prev,
                      [`${selectedDay}-${idx}`]: e.target.checked,
                    }));
                  }}
                  checked={checkedExercises[`${selectedDay}-${idx}`] || false}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
