import { motion } from "framer-motion";
import PagesMetaHead from "../../components/PagesMetaHead";
import northernLightsData from "../../data/northernLightsData.json";
import Image from "next/image";

function northren_light() {
  const { title, sections } = northernLightsData;

  return (
    <div>
      <PagesMetaHead title="northren_light" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-6">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
              {title}
            </h1>

            {/* Sections */}
            {sections.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && (
                  <h2 className="text-3xl font-semibold mb-4 mt-8 text-blue-700">
                    {section.heading}
                  </h2>
                )}
                {section.content.map((paragraph, idx) => (
                  <div key={idx} className="flex items-start mb-6">
                    <p className="text-gray-700 text-lg flex-1">{paragraph}</p>
                    {idx === 0 && index > 0 && index % 2 === 0 && (
                      <Image
                        src={`/website/images/northern_light${index}.jpg`}
                        width={100}
                        height={100}
                        alt={`northern light ${index}`}
                        className="w-1/3 ml-4 rounded shadow-lg"
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default northren_light;
