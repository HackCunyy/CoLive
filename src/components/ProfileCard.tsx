"use client";

import ProfileButtons from "./ProfileButtons";
import ProfileNavBar from "./ProfileNavBar";
import ProfileImgCarousel from "./ProfileImgCarousel";
import ProfileBio from "./ProfileBio";
import { Profile } from "@/lib/Profile.utils";
import { RoommateData } from "@/app/home/page";

const props: Profile = {
  id: 12345,
  first_name: "John",
  last_name: "Blackwood",
  gender: "male",
  user_shower_value: 5,
  user_clean_value: 7,
  user_friend_score: 8,
  user_room_time_value: 6,
  user_sleep_time: "Midnight",
  user_smoke: false,
  user_temp_value: 20,
  user_overnight_guest_value: "rarely",
  boroughs: ["Manhattan", "Brooklyn"],
};

interface Props {
  roommateData: RoommateData;
  setProfile: React.Dispatch<React.SetStateAction<RoommateData>>;
  profileIdx: number;
  setProfileIdx: React.Dispatch<React.SetStateAction<number>>;
  id: string;
}

const ProfileCard: React.FC<Props> = ({
  roommateData,
  setProfile,
  profileIdx,
  setProfileIdx,
  id,
}) => {
  const { first_name, last_name } = roommateData;
  return (
    <>
      <div className="flex flex-col h-screen items-center w-[380px]">
        <ProfileNavBar />

        <ProfileImgCarousel first_name={first_name} last_name={last_name} />
        <ProfileBio roommateData={roommateData} />

        <ProfileButtons
          setProfileIdx={setProfileIdx}
          profileIdx={profileIdx}
          id={id}
        />
      </div>
    </>
  );
};
export default ProfileCard;
