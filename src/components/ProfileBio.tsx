import { RoommateData } from "@/app/home/page";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface roommateData {
  roommateData: RoommateData;
}

const ProfileBio: React.FC<roommateData> = ({ roommateData }) => {
  return (
    <>
      <div className="flex flex-col w-full p-4 text-wrap flex-grow overflow-auto">
        <div className="w-[348px] text-wrap">
          <h1 className="font-semibold text-4xl break-words">
            {roommateData.first_name} {roommateData.last_name}
          </h1>
        </div>
        <div className="">
          <Badge variant="outline" className="text-sm mt-2 py-1">
            {roommateData.gender}
          </Badge>
        </div>

        <Separator className="my-2" />

        <div className="flex flex-col">
          <h2 className="text-lg">Preferred Boroughs:</h2>
          <div className="flex flex-wrap">
            {roommateData.boroughs.map((borough, index) => (
              <div key={index} className="inline-block mr-2 mb-2">
                <Badge
                  variant="outline"
                  className="text-sm text-white"
                  style={{
                    background: "linear-gradient(45deg, #FF7854, #FD267D)",
                  }}
                >
                  {borough}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          {roommateData.user_shower_value && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Shower Frequency:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_shower_value}
                </Badge>
              </div>
            </div>
          )}

          {roommateData.user_clean_value && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Room Cleanliness:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_clean_value}
                </Badge>
              </div>
            </div>
          )}

          {roommateData.user_friend_score && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Friend Score:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_friend_score}
                </Badge>
              </div>
            </div>
          )}

          {roommateData.user_room_time_value && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Room Time:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_room_time_value}
                </Badge>
              </div>
            </div>
          )}

          {roommateData.user_sleep_time && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Sleep Time:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_sleep_time}
                </Badge>
              </div>
            </div>
          )}

          {roommateData.user_smoke !== undefined && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Smoker:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_smoke ? "Yes" : "No"}
                </Badge>
              </div>
            </div>
          )}

          {roommateData.user_temp_value && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Preferred Temperature:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_temp_value}
                </Badge>
              </div>
            </div>
          )}

          {roommateData.user_overnight_guest_value && (
            <div className="flex space-x-2">
              <h2 className="pt-2 text-lg">Overnight Guests:</h2>
              <div className="flex items-end">
                <Badge
                  variant="outline"
                  className="text-sm flex items-center justify-center px-4"
                >
                  {roommateData.user_overnight_guest_value}
                </Badge>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileBio;
