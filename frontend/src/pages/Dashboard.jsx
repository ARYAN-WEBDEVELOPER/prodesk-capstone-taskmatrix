import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="dashboard">
      <div className="navbar">
        <h2>TaskMatrix</h2>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <div className="welcome-card">
          <h1>Welcome to TaskMatrix</h1>

          <p>
            Manage your projects, tasks and team
            efficiently.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <h2>0</h2>
            <p>Total Projects</p>
          </div>

          <div className="card">
            <h2>0</h2>
            <p>Total Tasks</p>
          </div>

          <div className="card">
            <h2>0</h2>
            <p>Completed Tasks</p>
          </div>

          <div className="card">
            <h2>0</h2>
            <p>Pending Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;