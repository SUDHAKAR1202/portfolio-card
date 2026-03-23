function Avatar({ image}) {
    return (
        <div className="avatar-container">
            <img src={image} alt="Profile" className="avatar-image" />
            <div className="avatar-border"></div>
        </div>
    )
}

export default Avatar;