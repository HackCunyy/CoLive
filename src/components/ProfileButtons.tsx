import Image from "next/image";
import Like from "../../public/assets/like.svg";
import Back from "../../public/assets/back.svg";
import Reject from "../../public/assets/reject.svg";
import { createClient } from "@/utils/supabase/client";

interface Props {
  setProfileIdx: React.Dispatch<React.SetStateAction<number>>;
  profileIdx: number;
  id: string;
}

const ProfileButtons: React.FC<Props> = ({ setProfileIdx, profileIdx, id }) => {
  const supabase = createClient();

  const handleReject = () => {
    console.log("Reject");
    setProfileIdx(profileIdx + 1 < 6 ? profileIdx + 1 : profileIdx);
  };

  const handleBack = () => {
    console.log("Back");
    // setProfileIdx(profileIdx - 1 >= 0 ? profileIdx - 1 : profileIdx);
  };

  const handleLike = () => {
    console.log("Like");
    setProfileIdx(profileIdx + 1 < 6 ? profileIdx + 1 : profileIdx);
  };

  return (
    <>
      <div className="flex flex-row place-content-evenly w-[380px]">
        <div
          className="bg-white rounded-full p-2 inline-flex items-center justify-center"
          onClick={handleReject}
        >
          <Image src={Reject} alt="Message Icon" width={64} height={64} />
        </div>
        <div
          className="bg-white rounded-full p-2 inline-flex items-center justify-center"
          onClick={handleBack}
        >
          <Image src={Back} alt="Tinder Icon" width={64} height={64} />
        </div>
        <div
          className="bg-white rounded-full p-2 inline-flex items-center justify-center"
          onClick={handleLike}
        >
          <Image src={Like} alt="Profile Icon" width={64} height={64} />
        </div>
      </div>
    </>
  );
};

export default ProfileButtons;
