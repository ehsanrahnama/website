import Link from "next/link";
import PagesMetaHead from "../../components/PagesMetaHead";


function advantures() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Advantures" />
      <Link href={"/advantures/northren_light"}>
        <div className="mt-10 sm:mt-15 flex justify-center">
          <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
            My Northern Lights Dream
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Ever since I saw pictures of the Northern Lights on the internet,
            I've really wanted to see them in real life. I often watch videos and
            look at photos of them on Instagram. Wow! Every time, I feel so
            surprised and happy.
          </p>
        </div>
        <p className="text-gray-700 text-lg mb-6">
          The colours are amazing, and the way the lights move and dance in the
          night sky looks like magic. It's so beautiful. I told myself that one
          day, I will travel and see these lights with my own eyes.
        </p>
      </Link>
    </div>
  );
}

export default advantures;
