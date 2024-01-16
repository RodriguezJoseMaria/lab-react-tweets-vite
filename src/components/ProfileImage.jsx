import React from "react";

const ProfileImage = function(props) {
    return ( <div>
        <img src={props.image}
        className="profile"
        alt="profile" />
        </div>
        );
}

export default ProfileImage;
