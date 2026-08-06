export default function About() {
  return (
    <section
      id="about"
      className="bg-[#030712] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-[5px] mb-3">
          About Me
        </p>

        <h2 className="text-5xl font-bold text-white mb-12">
          Transforming
          <span className="text-cyan-400"> Data into Insights.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left Card */}

          <div className="bg-[#111827] rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition">

            <h3 className="text-2xl font-semibold mb-6 text-white">
              Who am I?
            </h3>

            <p className="text-gray-400 leading-8">
              I'm Tanvi Shinde, a final-year B.Tech student specializing
              in Data Science. I have a strong foundation in Python,
              Machine Learning, Data Analysis, SQL and Statistics.
              I enjoy developing intelligent applications that solve
              real-world problems using AI and data-driven approaches.
            </p>

          </div>
{/* Right Card */}

<div className="bg-[#111827] rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition duration-300">

  <h3 className="text-2xl font-semibold mb-8 text-white">
    Core Expertise
  </h3>

  <div className="space-y-6">

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl">
        💻
      </div>
      <div>
        <h4 className="text-white font-semibold">Programming</h4>
        <p className="text-gray-400 text-sm">
          Python • SQL • C • C++
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl">
        🤖
      </div>
      <div>
        <h4 className="text-white font-semibold">Machine Learning</h4>
        <p className="text-gray-400 text-sm">
          Regression • Classification • Clustering
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl">
        📊
      </div>
      <div>
        <h4 className="text-white font-semibold">Data Analysis</h4>
        <p className="text-gray-400 text-sm">
          EDA • Feature Engineering • Statistics
        </p>
      </div>
    </div>

    <div className="flex items-center gap-4">
  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-2xl">
    🛠
  </div>
  <div>
    <h4 className="text-white font-semibold">Tools & Platforms</h4>
    <p className="text-gray-400 text-sm">
      Streamlit • Git • GitHub • Power BI • Jupyter Notebook
    </p>
  </div>
</div>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}