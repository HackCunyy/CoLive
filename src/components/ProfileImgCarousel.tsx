import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Portrait from "../../public/assets/portrait.jpg";

interface Props {
  first_name: string;
  last_name: string;
}

const ProfileImgCarousel = ({ first_name, last_name }: Props) => {
  console.log(first_name, last_name);
  return (
    <>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0 overflow-auto rounded-xl">
                    <Image
                      src={`/Photos/${first_name}_${last_name}/${
                        index + 1
                      }.png`}
                      alt="Image 1"
                      className="object-cover p-0 aspect-square"
                      width={400}
                      height={400}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
          <CarouselNext /> */}
      </Carousel>
    </>
  );
};

export default ProfileImgCarousel;
