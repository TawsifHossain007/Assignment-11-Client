import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-shadow-green-950 tracking-tight">
          We Build With Intent
        </h1>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Not just another project. A system designed to work, scale, and last.
        </p>
      </motion.div>

      <Tabs>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <TabList className="flex justify-center gap-6 mb-12">
            {["Mission", "Vision", "Values"].map((item) => (
              <Tab
                key={item}
                className="px-6 border-2 border-green-500 py-2 rounded-full cursor-pointer text-sm font-medium
                           bg-green-100 hover:bg-green-300 transition"
              >
                {item}
              </Tab>
            ))}
          </TabList>
        </motion.div>

        <TabPanel>
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              { title: "Problem First", text: "Every feature solves something real." },
              { title: "Clean Systems", text: "Readable today. Maintainable tomorrow." },
              { title: "Ship Fast", text: "Iterate, test, improve." },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="rounded-2xl p-8 bg-linear-to-br from-green-200 via-green-300 to-green-400"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </TabPanel>

        <TabPanel>
          <motion.div
            className="relative bg-linear-to-br from-green-200 via-green-300 to-green-400 rounded-3xl p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <h2 className="text-4xl font-bold leading-tight">
                Build once. <br /> Scale endlessly.
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>→ Architecture that doesn’t collapse</li>
                <li>→ Performance over shortcuts</li>
                <li>→ Products that age well</li>
              </ul>
            </div>
          </motion.div>
        </TabPanel>

        <TabPanel>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              ["Ownership", "We take responsibility for what we ship."],
              ["Simplicity", "Complexity is earned, not added."],
              ["Consistency", "Progress beats motivation."],
              ["Clarity", "Code should explain itself."],
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                className="bg-linear-to-br from-green-200 via-green-300 to-green-400 rounded-2xl p-6 hover:border-primary transition"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.35 }}
              >
                <h4 className="font-semibold mb-1">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default AboutUs;
