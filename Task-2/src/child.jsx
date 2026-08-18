function Child({ user }) {
  return (
    <div className="user-card">
      <div className="card-header">
        <h2>{user.name}</h2>
        <span>{user.occupation}</span>
      </div>

      <div className="user-details">
        <p>
          <strong>Age:</strong> {user.age}
        </p>

        <p>
          <strong>City:</strong> {user.city}
        </p>

        <p>
          <strong>Mobile:</strong> {user.mobile}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Occupation:</strong> {user.occupation}
        </p>

        <p>
          <strong>Address:</strong> {user.address}
        </p>
      </div>
    </div>
  );
}

export default Child;
