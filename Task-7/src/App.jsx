import { useRef, useState } from "react";
import "./App.css";

function App() {
  // Reference to the hidden file input
  const fileInputRef = useRef(null);

  // Default profile image
  const defaultImage =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop";

  // State for profile image
  const [profileImage, setProfileImage] = useState(defaultImage);

  // State for like count
  const [likeCount, setLikeCount] = useState(0);

  // Trigger the hidden file input
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle selected image
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Increase like count
  const handleLike = () => {
    setLikeCount((previousCount) => previousCount + 1);
  };

  return (
    <div className="app">
      <div className="profile-card">
        <div className="card-header">
          <p className="small-title">MY PROFILE</p>
          <h1>Profile Picture</h1>
          <p className="subtitle">
            Upload a new profile picture and share some love.
          </p>
        </div>

        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden-input"
        />

        {/* Custom upload button */}
        <button className="upload-button" onClick={handleUploadClick}>
          Upload Image
        </button>

        <div className="divider"></div>

        <div className="like-section">
          <p>Do you like this profile?</p>

          <button className="like-button" onClick={handleLike}>
            Like
          </button>

          <div className="like-count">
            {likeCount} {likeCount === 1 ? "Like" : "Likes"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;