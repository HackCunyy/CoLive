import HomePageContent from "./content";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import { createClient } from "@/utils/supabase/server";

export type RoommateData = {
  clerk_id: string;
  gender: string;
  user_shower_value: number;
  user_clean_value: number;
  user_friend_score: number;
  user_room_time_value: number;
  user_sleep_time: string;
  user_smoke: boolean;
  user_temp_value: number;
  user_overnight_guest_value: number;
  sexuality: string;
  boroughs: string[];
  first_name: string;
  last_name: string;
};

const Page: React.FC = async () => {
  const clerkUser = await currentUser();
  const supabase = createClient();
  let newUser = true;
  let data: RoommateData[] = [];

  const { id, firstName, lastName } = clerkUser;

  let { data: user_responses, error } = await supabase
    .from("user_responses")
    .select("clerk_id")
    .eq("clerk_id", id);

  if (error) {
    console.error(error);
  }

  if (user_responses.length > 0) {
    newUser = false;
  }

  if (user_responses.length > 0) {
    let { data: user_data, error } = await supabase
      .from("user_responses")
      .select("*");

    if (error) {
      console.error(error);
    }

    const bannedColumns = [
      "id",
      "created_at",
      "user_preferred_shower_value",
      "user_preferred_clean_value",
      "user_preferred_friend_score",
      "user_preferred_room_time_value",
      "user_preferred_sleep_time",
      "user_preferred_smoke",
      "user_preferred_temp_value",
      "user_preferred_overnight_guest_value",
      "user_preferred_gender",
    ];

    const bannedClerkIds = ["user_2cXfDTKIMRLtAolLFUtXUiNyas1"];

    user_data?.filter((user) => {
      if (user.clerk_id !== id || !bannedClerkIds.includes(user.clerk_id)) {
        const final = {};

        for (const [key, value] of Object.entries(user)) {
          if (
            !bannedColumns.includes(key) ||
            !bannedClerkIds.includes(user.clerk_id)
          ) {
            final[key] = value;
          }
        }

        data.push(final);
      }
    });
  }

  console.log(data);

  return <HomePageContent newUser={newUser} roommateData={data} id={id} />;
};

export default Page;

// // Json of data, similar to the data in the database, user_id
// const findSimilarity = (userId: string) => {
//   const cookieStore = cookies();
//   const supabase = createClient(cookieStore);

//   let { data: user_responses, error } = await supabase
//     .from("user_responses")
//     .select();

//   if (error) {
//     console.error("error", error);
//   }

//   const broughs_key_value = {
//     Manhattan: 0,
//     Brooklyn: 1,
//     Queens: 2,
//     Bronx: 3,
//     "Staten Island": 4,
//   };

//   const matrix = [];
//   let me_data_vector = {};
//   const userIds = [];

//   user_responses?.forEach((response) => {
//     const broughs_data = {};

//     response.gender = response.gender === "Male" ? 0 : 1;
//     response.user_sleep_time =
//       new Date(response.user_sleep_time) > new Date("12:00") ? 0 : 1;
//     response.boroughs = response.boroughs.map((borough) => {
//       broughs_data[borough] = 1;
//     });

//     const dataVector = {
//       gender: user_responses[0].gender,
//       user_shower_value: user_responses[0].user_shower_value,
//       user_clean_value: user_responses[0].user_clean_value,
//       user_friend_score: user_responses[0].user_friend_score,
//       user_room_time_value: user_responses[0].user_room_time_value,
//       user_sleep_time: user_responses[0].user_sleep_time,
//       user_smoke: user_responses[0].user_smoke,
//       user_temp_value: user_responses[0].user_temp_value,
//       user_overnight_guest_value: user_responses[0].user_overnight_guest_value,
//     };

//     // for each borough, add a key value pair to the dataVector
//     Object.keys(broughs_key_value).forEach((borough) => {
//       dataVector[borough] = broughs_data[borough] || 0;
//     });

//     if (response.clerk_id === userId) {
//       me_data_vector = dataVector;
//     } else {
//       matrix.push(dataVector);
//       userIds.push(response.clerk_id);
//     }
//   });

//   const meArray = Object.values(me_data_vector);

//   const returnData = [];

//   matrix.forEach((dataVector) => {
//     const dataVectorArray = Object.values(dataVector);
//     const s = similarity(meArray, dataVectorArray);
//     returnData.push({ dataVector, s, clerk_id: dataVector.clerk_id });
//   });
// };

// const page = async () => {
//   const cookieStore = cookies();
//   const supabase = createClient(cookieStore);

//   let { data: user_responses, error } = await supabase
//     .from("user_responses")
//     .select();

//   if (error) {
//     console.error("error", error);
//   }

//   user_responses.gender = user_responses.gender === "Male" ? 0 : 1;
//   user_responses.user_sleep_time =
//     new Date(user_responses.user_sleep_time) > new Date("12:00") ? 0 : 1;

//   const broughs_key_value = {
//     Manhattan: 0,
//     Brooklyn: 1,
//     Queens: 2,
//     Bronx: 3,
//     "Staten Island": 4,
//   };

//   const matrix = [];
//   const me_data_vector = {};
//   const userIds = [];

//   user_responses?.forEach((response) => {
//     const broughs_data = {};

//     response.gender = response.gender === "Male" ? 0 : 1;
//     response.user_sleep_time =
//       new Date(response.user_sleep_time) > new Date("12:00") ? 0 : 1;
//     response.boroughs = response.boroughs.map((borough) => {
//       broughs_data[borough] = 1;
//     });

//     const dataVector = {
//       gender: user_responses[0].gender,
//       user_shower_value: user_responses[0].user_shower_value,
//       user_clean_value: user_responses[0].user_clean_value,
//       user_friend_score: user_responses[0].user_friend_score,
//       user_room_time_value: user_responses[0].user_room_time_value,
//       user_sleep_time: user_responses[0].user_sleep_time,
//       user_smoke: user_responses[0].user_smoke,
//       user_temp_value: user_responses[0].user_temp_value,
//       user_overnight_guest_value: user_responses[0].user_overnight_guest_value,
//     };

//     // for each borough, add a key value pair to the dataVector
//     Object.keys(broughs_key_value).forEach((borough) => {
//       dataVector[borough] = broughs_data[borough] || 0;
//     });

//     matrix.push(dataVector);

//     const meArray = Object.values(me_data_vector);

//     const returnData = [];

//     matrix.forEach((dataVector, index) => {
//       const dataVectorArray = Object.values(dataVector);
//       const s = similarity(meArray, dataVectorArray);
//       returnData.push({ dataVector, s, clerk_id: userIds[index] });
//     });

//     return returnData;
//   });
// };
