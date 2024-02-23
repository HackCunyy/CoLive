"use client";

import React, { use, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import { RoommateData } from "./page";

interface Props {
  newUser: boolean;
  roommateData: RoommateData[];
  id: string;
}

const HomePageContent: React.FC<Props> = ({ newUser, roommateData, id }) => {
  const router = useRouter();

  const [profileIdx, setProfileIdx] = useState(0);
  const [profile, setProfile] = useState<RoommateData>(roommateData[0]);

  useEffect(() => {
    console.log(profileIdx);
    setProfile(roommateData[profileIdx]);
  }, [profileIdx]);

  if (newUser) {
    router.push("/typeform");
  }

  return (
    <main className="flex min-h-screen flex-col items-center min-w-screen overflow-hidden">
      <div className="flex flex-col items-center w-[380px] h-screen">
        <ProfileCard
          roommateData={profile}
          setProfile={setProfile}
          profileIdx={profileIdx}
          setProfileIdx={setProfileIdx}
          id={id}
        />
      </div>
    </main>
  );
};

export default HomePageContent;

// {
//     id: 10,
//     created_at: '2024-02-18T08:15:05.142779+00:00',
//     gender: 'Female',
//     user_shower_value: 3,
//     user_preferred_shower_value: 3,
//     first_name: 'Sarah',
//     last_name: 'Jones',
//     user_clean_value: 2,
//     user_preferred_clean_value: 2,
//     user_friend_score: 1,
//     user_preferred_friend_score: 1,
//     user_room_time_value: 2,
//     user_preferred_room_time_value: 2,
//     user_sleep_time: '02:00:00',
//     user_preferred_sleep_time: '02:00:00',
//     user_smoke: false,
//     user_preferred_smoke: false,
//     user_temp_value: 72,
//     user_preferred_temp_value: 72,
//     sexuality: 'Straight',
//     user_overnight_guest_value: 1,
//     user_preferred_overnight_guest_value: 1,
//     boroughs: [ 'Manhattan', 'Staten Island' ],
//     user_preferred_gender: 'Male',
//     clerk_id: 'user_2cWjVFGWRfPzdONNDbDgqoQEtJs'
//   }
