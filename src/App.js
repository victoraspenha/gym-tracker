import React, { useState } from "react";
import "./App.css";

const workoutPlan = {
  Monday: [
    { name: "Chest Press Machine / Supino Máquina", sets: 3, reps: 10, weight: "60–70% 1RM (~20–30 kg)" },
    { name: "Incline Press Machine / Supino Inclinado Máquina", sets: 3, reps: 10, weight: "≈60% 1RM (~15–25 kg)" },
    { name: "Cable Crossover / Crucifixo no Cabo", sets: 3, reps: 12, weight: "5–12 kg por lado" },
    { name: "Pec Deck Machine / Peck Deck", sets: 3, reps: 12, weight: "35–45% 1RM (~15–25 kg)" },
    { name: "Triceps Pushdown (Rope) / Tríceps Corda", sets: 3, reps: 12, weight: "15–25 kg" },
    { name: "Overhead Triceps Extension (Cable) / Tríceps Testa no Cabo", sets: 3, reps: 12, weight: "10–20 kg" },
    { name: "Standing Dumbbell Lateral Raise / Elevação Lateral com Halteres", sets: 3, reps: 15, weight: "4–8 kg por lado" },
    { name: "Shoulder Press Machine / Desenvolvimento Ombros Máquina", sets: 3, reps: 10, weight: "≈60% 1RM (~15–25 kg)" },
    { name: "Front Raise with Cable / Elevação Frontal no Cabo", sets: 3, reps: 12, weight: "4–8 kg" },
    { name: "Push-ups / Flexão de Braço", sets: 3, reps: 12, weight: "Peso corporal" }
  ],
  Tuesday: [
    { name: "Barbell Hip Thrust / Elevação de Quadril com Barra", sets: 3, reps: 12, weight: "50–70% 1RM (~40–60 kg)" },
    { name: "Smith Machine Squat / Agachamento Smith", sets: 4, reps: 10, weight: "50–60% 1RM (~30–50 kg)" },
    { name: "Hip Abduction Machine / Abdução de Quadril", sets: 3, reps: 12, weight: "20–30 kg" },
    { name: "Hip Adduction Machine / Adução de Quadril", sets: 3, reps: 12, weight: "20–30 kg" },
    { name: "Leg Press Machine / Leg Press", sets: 4, reps: 10, weight: "50–70% 1RM (~80–120 kg)" },
    { name: "Seated Calf Raise / Panturrilha Sentado", sets: 3, reps: 15, weight: "20–30 kg" },
    { name: "Standing Calf Raise / Panturrilha em Pé", sets: 3, reps: 15, weight: "20–40 kg" },
    { name: "Leg Curl Machine / Flexora", sets: 3, reps: 12, weight: "20–30 kg" },
    { name: "Leg Extension Machine / Cadeira Extensora", sets: 3, reps: 12, weight: "20–30 kg" },
    { name: "Kettlebell Power Clean / Power Clean com Kettlebell", sets: 3, reps: 12, weight: "8–16 kg" }
  ],
  Thursday: [
    { name: "Seated Row Machine / Remada Sentada", sets: 3, reps: 10, weight: "≈60% 1RM (~25–35 kg)" },
    { name: "Preacher Curl Machine / Rosca Scott Máquina", sets: 3, reps: 12, weight: "15–25 kg" },
    { name: "Lat Pulldown Machine / Puxada Frente", sets: 3, reps: 10, weight: "≈60% 1RM (~25–35 kg)" },
    { name: "Cable Rear Delt Fly / Crucifixo Inverso no Cabo", sets: 3, reps: 15, weight: "4–8 kg" },
    { name: "Trap Shrug / Encolhimento de Trapézio", sets: 3, reps: 15, weight: "15–25 kg por lado" },
    { name: "Straight Arm Pulldown / Puxada com Braço Reto", sets: 3, reps: 12, weight: "15–25 kg" },
    { name: "Barbell Curl / Rosca Direta Barra", sets: 3, reps: 12, weight: "15–25 kg" },
    { name: "Hammer Curl / Rosca Martelo", sets: 3, reps: 12, weight: "8–14 kg por lado" },
    { name: "Back Extension / Extensão Lombar", sets: 3, reps: 15, weight: "Peso corporal ou +5–10 kg" },
    { name: "Rope Face Pull / Face Pull com Corda", sets: 3, reps: 15, weight: "10–20 kg" }
  ],
  Friday: [
    { name: "Barbell Back Squat / Agachamento Livre", sets: 4, reps: 8, weight: "50–60% 1RM (~40–60 kg)" },
    { name: "Deadlift / Levantamento Terra", sets: 4, reps: 6, weight: "50–60% 1RM (~40–60 kg)" },
    { name: "Leg Press Machine / Leg Press", sets: 3, reps: 10, weight: "60–70% 1RM (~80–120 kg)" },
    { name: "Static Lunge with Dumbbells / Avanço Estático com Halteres", sets: 3, reps: 12, weight: "8–12 kg por lado" },
    { name: "Standing Calf Raise / Panturrilha em Pé", sets: 4, reps: 15, weight: "20–40 kg" },
    { name: "Leg Curl Machine / Flexora", sets: 3, reps: 12, weight: "20–30 kg" },
    { name: "Hack Squat Machine / Agachamento Hack", sets: 3, reps: 10, weight: "50–60% 1RM (~40–60 kg)" },
    { name: "Romanian Deadlift / Stiff", sets: 3, reps: 10, weight: "30–50 kg" },
    { name: "Cable Pull-Through / Passada no Cabo", sets: 3, reps: 12, weight: "15–25 kg" },
    { name: "Plank / Prancha Isométrica", sets: 3, reps: "30–60s", weight: "Peso corporal" }
  ]
};

function App() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [checkedExercises, setCheckedExercises] = useState({});
  const [gymDates, setGymDates] = useState([]);

  const exercises = workoutPlan[selectedDay] || [];

  const handleAddDate = () => {
    const today = new Date().toLocaleDateString();
    if (!gymDates.includes(today)) {
      setGymDates([...gymDates, today]);
    }
  };

  const handleResetWeek = () => {
    // Desmarca todos os exercícios (todas as abas/dias)
    setCheckedExercises({});
  };

  return (
    <div className="container colorful">
      <div className="summary">
        <p>
          <em>
            Reminder / Lembrete: Update your training plan by <strong>September 30, 2025</strong>.
          </em>
        </p>
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
            <th>Exercise / Exercício</th>
            <th>Sets / Séries</th>
            <th>Reps / Repetições</th>
            <th>Weight / Peso</th>
            <th>Done / Concluído</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((ex, idx) => {
            const key = `${selectedDay}-${idx}`;
            const checked = !!checkedExercises[key];
            return (
              <tr key={idx} className={checked ? "checked-row" : ""}>
                <td>{ex.name}</td>
                <td>{ex.sets}</td>
                <td>{ex.reps}</td>
                <td>{ex.weight || "-"}</td>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setCheckedExercises((prev) => ({ ...prev, [key]: e.target.checked }))
                    }
                    checked={checked}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="actions">
        <button className="primary" onClick={handleAddDate}>
          Log Today / Registrar Hoje
        </button>
        <button className="secondary" onClick={handleResetWeek} title="Clear all checkmarks">
          Reset for Next Week / Limpar para a próxima semana
        </button>
      </div>

      {gymDates.length > 0 && (
        <div className="log">
          <h3>Training Log / Registro de Treino</h3>
          <ul>
            {gymDates.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
