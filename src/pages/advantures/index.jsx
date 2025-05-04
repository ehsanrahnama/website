import Link from "next/link";
import PagesMetaHead from "../../components/PagesMetaHead";
import Image from "next/image";
// import northren_light_img  from "../../public/images/north_light1.JPG";

function advantures() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Advantures" />
      <div className="mt-10 sm:mt-15 grid grid-cols-1 gap-6">
        <Link href={"/advantures/northren_light"}>
          <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex">
            <Image
              src="/website/images/northern_light4.jpg"
              width={100}
              height={100}
              alt="Northern Light"
              className="w-48 h-48 object-cover"
              style={{ objectPosition: "top" }}
            />
            <div className="p-4 flex-1">
              <h1 className="text-2xl font-bold mb-2 text-green-700">
                My Northern Lights Dream
              </h1>
              <p className="text-gray-700 text-sm">
                Ever since I saw pictures of the Northern Lights on the
                internet, I've really wanted to see them in real life. I often
                watch videos and look at photos of them on Instagram. Wow! Every
                time, I feel so surprised and happy. The colours are amazing,
                and the way the lights move and dance in the night sky looks
                like magic. It's so beautiful. I told myself that one day, I
                will travel and see these lights with my own eyes.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/advantures/kish_dive"}>
          <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex">
            <Image
              src="/website/images/kish_dive2.jpg"
              alt="Kish Dive"
              width={100}
              height={100}
              className="w-48 h-48 object-cover"
            />
            <div className="p-4 flex-1">
              <h1 className="text-2xl font-bold mb-2 text-blue-700">
                Diving in Kish Island
              </h1>
              <p className="text-gray-700 text-sm">
                Once upon a time, after many months of staying at home and
                working remotely, I decided to take a break. The government
                announced that everything would reopen for a short time, and
                people could travel inside the country. I planned a trip to Kish
                Island, which is in the south of Iran, in the Persian Gulf. I
                bought a ticket for a tour and felt very excited to finally
                travel again.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default advantures;
