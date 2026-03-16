function PersonalInfo() {

    const name = "John Doe";
    const role = "Frontend Developer";
    const location = "San Francisco, CA";
    const email = "john.doe@example.com";

    return (
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
            <p className="email">{email}</p>

        </div>
    )
}

export default PersonalInfo;