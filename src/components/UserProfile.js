import React from "react";

function UserProfile(props) {
  return (
    <div className="UserProfile">
        <div className="User">
            <div className="name">Jack Oliver</div>
            <div className="image">
                <img src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile" />
            </div>
        </div>
    </div>
  );
}

export default UserProfile;
