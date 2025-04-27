import Link from "next/link";
import PagesMetaHead from "../../components/PagesMetaHead";
// import northren_light_img  from "../../public/images/north_light1.JPG"; 


function advantures() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Advantures" />
      <div className="mt-10 sm:mt-15 grid grid-cols-1 gap-6">
        <Link href={"/advantures/northren_light"}>
          <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="../../public/images/north_light1.JPG"
              alt="Northern Lights"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-2 text-green-700">
                My Northern Lights Dream
              </h1>
              <p className="text-gray-700 text-sm">
                Ever since I saw pictures of the Northern Lights on the internet,
                I've really wanted to see them in real life. I often watch videos
                and look at photos of them on Instagram. Wow! Every time, I feel
                so surprised and happy. The colours are amazing, and the way the
                lights move and dance in the night sky looks like magic. It's so
                beautiful. I told myself that one day, I will travel and see these
                lights with my own eyes.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default advantures;
