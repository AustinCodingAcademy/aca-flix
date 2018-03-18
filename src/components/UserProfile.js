import React from 'react';
import avatar from '../media/avatar.png'

function UserProfile() {

  return (
    <div className="UserProfile">
      <div className="User">
        <div className="name">Gob Bluth</div>
        <div className="image">
          <img src={avatar} alt="profile" />
        </div>
      </div>
    </div>
  )
}

export default UserProfile;
