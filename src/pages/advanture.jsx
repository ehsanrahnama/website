import { motion } from 'framer-motion';
import PagesMetaHead from '../components/PagesMetaHead';

function Advanture() {
    return (
        <div>
            <PagesMetaHead title="Advanture" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto">
                    <section className="py-12">
    <div className="max-w-3xl mx-auto px-6">
    
    <h1 className="text-4xl font-bold mb-6 text-center text-green-700">My Northern Lights Dream</h1>
    
    <p className="text-gray-700 text-lg mb-6">
      Ever since I saw pictures of the Northern Lights on the internet, I've really wanted to see them in real life. I often watch videos and look at photos of them on Instagram. Wow! Every time, I feel so surprised and happy.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      The colours are amazing, and the way the lights move and dance in the night sky looks like magic. It's so beautiful. I told myself that one day, I will travel and see these lights with my own eyes.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      In 2022, I made a plan to go see the lights. I was so excited! But then, my trip had to be stopped. This was because of the war between Russia and Ukraine. I felt very, very sad when I couldn't go.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      But I didn't give up on my dream! I just waited. I kept hoping for a good time to try again. And finally, it happened! This year, in February 2025, I was able to go. My dream came true!
    </p>

    <h2 className="text-3xl font-semibold mb-4 mt-8 text-blue-700">First Place: Moscow</h2>

    <p className="text-gray-700 text-lg mb-6">
      My big trip started on February 6th. The first city I visited was Moscow. I stayed in Moscow for two days before I went north to a place called Murmansk.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      Moscow is a very beautiful city, and it's really big! There are many famous things to see there. I went to Red Square, which is a very famous big square. I saw the colourful church called St. Basil’s Cathedral – it looks amazing in photos, and it's amazing in real life too! I also took a walk near the Moscow River.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      It was nice to see Moscow, but really, I was thinking about just one thing all the time – seeing the Northern Lights! I couldn't wait to get to Murmansk.
    </p>

    <h2 className="text-3xl font-semibold mb-4 mt-8 text-blue-700">So, What Are the Northern Lights?</h2>

    <p className="text-gray-700 text-lg mb-6">
      You might ask, what are these Northern Lights? Some people call them Aurora Borealis. They happen when tiny bits fly from the sun and hit the air high up around the Earth. When these tiny sun-bits touch the gases in the air (like oxygen and nitrogen), they make beautiful lights shine in the sky.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      Most often, the colour you see is green. But sometimes, you can also see blue, red, or purple lights! The best places to see them are in countries close to the North Pole, like Norway, Canada, Iceland, and Russia.
    </p>

    <h2 className="text-3xl font-semibold mb-4 mt-8 text-blue-700">Getting to Murmansk</h2>

    <p className="text-gray-700 text-lg mb-6">
      After staying two days in Moscow, I took a plane to Murmansk. This city is way, way up north in Russia, very near the Arctic Circle. When I got there, it was very cold! But I didn't really feel the cold because I was just so excited to maybe see the lights.
    </p>

    <h2 className="text-3xl font-semibold mb-4 mt-8 text-blue-700">Seeing the Lights – First Time!</h2>

    <p className="text-gray-700 text-lg mb-6">
      I stayed in Murmansk for four days, really hoping I would see the Northern Lights. On the first night, I went out with a group of other people who also wanted to see them. We went to a dark place and waited, looking up at the sky.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      We waited for quite a long time. Then, suddenly, we saw a light green colour appear! At first, it was quite faint and small. But then it grew bigger and much brighter! The people with me started cheering and clapping. It was amazing! The lights moved slowly, like waves dancing in the sky. It was so beautiful. I couldn't take my eyes off them. I forgot about the cold and everything else. It was one of the best moments of my whole life.
    </p>

    <h2 className="text-3xl font-semibold mb-4 mt-8 text-blue-700">The Second Night – Even Better!</h2>

    <p className="text-gray-700 text-lg mb-6">
      The next night, I went on another tour with a guide called Alex. We drove out of the city for about 90 minutes (an hour and a half). We went somewhere with no street lights, so it was very dark. It felt even colder this night!
    </p>

    <p className="text-gray-700 text-lg mb-6">
      But then, the lights came back! And when they did, I forgot all about being cold. This time, the colours were even stronger and brighter. I saw bright green, some blue, and even a little purple light dancing above us. We took many photos, but photos just can't show how truly beautiful it is. You have to see it with your own eyes to really understand.
    </p>

    <h2 className="text-3xl font-semibold mb-4 mt-8 text-blue-700">A Dream That Isn't Finished</h2>

    <p className="text-gray-700 text-lg mb-6">
      Seeing the Northern Lights was my dream, and it came true! But now, guess what? I want to see them again! I'd love to go to other countries like Norway or Canada to see how they look there.
    </p>

    <p className="text-gray-700 text-lg mb-6">
      So, if you also dream of seeing the Northern Lights, please don't give up hope. Maybe it will take time, like it did for me. But one day, you might see them too. And when you do, you will understand why everyone says it's like magic. For me, seeing them once is not enough. I know I will try to find these amazing lights again someday!
    </p>

  </div>
</section>

            </motion.div>

            {/** Counter without paddings */}
        </div>
    );
}

export default Advanture;
