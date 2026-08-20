function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <div className="employee-header">
        <div className="employee-avatar">
          {employee.name.charAt(0)}
        </div>

        <div>
          <h2>{employee.name}</h2>
          <p>{employee.role}</p>
        </div>
      </div>

      <div className="employee-details">
        <div className="detail-item">
          <span>Company</span>
          <strong>{employee.company}</strong>
        </div>

        <div className="detail-item">
          <span>Experience</span>
          <strong>{employee.experience}</strong>
        </div>

        <div className="detail-item">
          <span>Branch</span>
          <strong>{employee.branch}</strong>
        </div>

        <div className="detail-item">
          <span>Location</span>
          <strong>{employee.location}</strong>
        </div>

        <div className="detail-item">
          <span>Skills</span>
          <strong>{employee.skills}</strong>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;