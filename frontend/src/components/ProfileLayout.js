import React from "react";
import { Outlet } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";

function ProfileLayout() {
  return (
    <div>
      <div>
        <ProfileHeader />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ProfileLayout;
