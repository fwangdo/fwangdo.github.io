export default function Home() {
  const focusAreas = [
    'Static analysis',
    'Compiler optimization',
    'SMT solver fuzzing',
    'Abstract interpretation',
  ];

  const highlights = [
    { label: '40+', detail: 'solver bugs found' },
    { label: '2022-2025', detail: 'PhD coursework' },
    { label: 'FX -> IR', detail: 'compiler frontend work' },
  ];

  return (
    <>
      {/* Header */}
      <header className="mb-14 grid gap-8 rounded-2xl border border-gray-200 bg-white/85 p-6 shadow-sm md:grid-cols-[1.45fr_0.85fr] md:p-9">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-blue-700">
            Program analysis researcher
          </p>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            Doyeon Hwang
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            I work on program analysis, compiler optimization, and SMT solver
            testing, with a focus on turning research ideas into practical
            systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-gray-200 bg-stone-50 px-3 py-1 text-sm text-gray-600"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <a
              href="https://github.com/fwangdo"
              className="rounded-full bg-gray-950 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              GitHub
            </a>
            <a
              href="mailto:fwangdo35@gmail.com"
              className="rounded-full border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-700"
            >
              Email
            </a>
            <a
              href="/resume.pdf"
              className="rounded-full border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:border-blue-600 hover:text-blue-700"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="grid content-between gap-4 border-t border-gray-200 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div>
            <p className="text-sm font-medium text-gray-500">Current focus</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-950">
              Finding semantic bugs and redundant computation in real systems.
            </p>
          </div>
          <div className="grid gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-gray-200 bg-stone-50 px-4 py-3"
              >
                <div className="text-xl font-semibold text-gray-950">
                  {item.label}
                </div>
                <div className="text-sm text-gray-500">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* About */}
      <section className="mb-14 grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
        <h2 className="text-lg font-semibold text-gray-950">
          About
        </h2>
        <div className="border-l border-gray-200 pl-5">
          <p className="max-w-3xl text-gray-600 leading-8">
            I am passionate about improving program performance through program
            analysis. Specifically, I focus on static analysis-based
            optimizations that eliminate unnecessary computations. I enjoy
            applying ideas from academic papers to real-world problems and value
            proposing novel approaches to challenging problems.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-14 grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
        <h2 className="text-lg font-semibold text-gray-950">
          Education
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white/85 p-5 shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-medium">
                PhD Coursework, Computer Science
              </span>
              <span className="text-sm text-gray-500 sm:ml-4 sm:shrink-0">
                2022 &ndash; 2025
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Korea University, Seoul
            </p>
            <p className="text-sm text-gray-400">
              SMT Solver Fuzzing, Abstract Interpretation
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white/85 p-5 shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-medium">
                M.S. in Information Convergence Engineering
              </span>
              <span className="text-sm text-gray-500 sm:ml-4 sm:shrink-0">
                2019 &ndash; 2021
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Pusan National University, Busan
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white/85 p-5 shadow-sm">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-medium">B.A. in Psychology</span>
              <span className="text-sm text-gray-500 sm:ml-4 sm:shrink-0">
                2012 &ndash; 2018
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Jeonbuk National University, Jeonju
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-6 md:grid-cols-[0.7fr_1.3fr]">
        <h2 className="text-lg font-semibold text-gray-950">
          Skills
        </h2>
        <table className="w-full rounded-lg border border-gray-200 bg-white/85 text-sm shadow-sm">
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="w-36 px-5 py-4 font-medium text-gray-500 align-top">
                Languages
              </td>
              <td className="px-5 py-4 text-gray-600">
                Python, JavaScript, C++, OCaml
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="w-36 px-5 py-4 font-medium text-gray-500 align-top">
                Tools
              </td>
              <td className="px-5 py-4 text-gray-600">
                Git, Linux, PyParsing, PyTorch, TensorFlow, LaTeX
              </td>
            </tr>
            <tr>
              <td className="w-36 px-5 py-4 font-medium text-gray-500 align-top">
                Specialization
              </td>
              <td className="px-5 py-4 text-gray-600">
                Compiler Front-end, Program Analysis, Program Testing
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
