export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Doyeon Hwang
        </h1>
        <p className="mt-2 text-gray-500">
          PhD Coursework &middot; Program Analysis &middot; SMT Solver Testing
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/fwangdo"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:fwangdo35@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            fwangdo35@gmail.com
          </a>
          <a
            href="/resume.pdf"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Resume (PDF)
          </a>
        </div>
      </header>

      {/* About */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold border-b-2 border-gray-900 pb-1">
          About
        </h2>
        <p className="text-gray-600 leading-relaxed">
          I am passionate about improving program performance through program
          analysis. Specifically, I focus on static analysis-based optimizations
          that eliminate unnecessary computations. I enjoy applying ideas from
          academic papers to real-world problems and value proposing novel
          approaches to challenging problems.
        </p>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold border-b-2 border-gray-900 pb-1">
          Education
        </h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-medium">
                PhD Coursework, Computer Science
              </span>
              <span className="text-sm text-gray-500 ml-4 shrink-0">
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
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-medium">
                M.S. in Information Convergence Engineering
              </span>
              <span className="text-sm text-gray-500 ml-4 shrink-0">
                2019 &ndash; 2021
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Pusan National University, Busan
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-medium">B.A. in Psychology</span>
              <span className="text-sm text-gray-500 ml-4 shrink-0">
                2012 &ndash; 2018
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Jeonbuk National University, Jeonju
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold border-b-2 border-gray-900 pb-1">
          Research
        </h2>
        <div>
          <div className="flex justify-between items-baseline">
            <h3 className="font-medium">SMT Solver Testing (Python)</h3>
            <span className="text-sm text-gray-500 ml-4 shrink-0">
              2022 &ndash; 2025
            </span>
          </div>
          <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
            <li>
              Developed a fuzzer that found{' '}
              <strong className="text-gray-900">40+ bugs</strong> in
              state-of-the-art SMT solvers: Z3, CVC5, and Bitwuzla
            </li>
            <li>
              Built an SMTLibv2 parser using PyParsing with a custom AST design
            </li>
            <li>
              Designed a grammar-aware fuzzer that generates syntactically valid
              test cases across diverse production rules
            </li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold border-b-2 border-gray-900 pb-1">
          Projects
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium">
                PyTorch Deep Learning Compiler Frontend
              </h3>
              <a
                href="https://github.com/fwangdo"
                className="text-sm text-gray-500 hover:text-blue-600 ml-4 shrink-0 transition-colors"
              >
                GitHub
              </a>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
              <li>
                Converted PyTorch models to FX-based graphs, then lowered to a
                custom IR
              </li>
              <li>
                Implemented rewrite passes (Conv&ndash;BatchNorm folding,
                constant folding, etc.)
              </li>
              <li>
                Quantitatively verified optimization effects by comparing FLOPs
                and memory access costs (ResNet-18, UNet)
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium">
                Functional Language Interpreter (C++17)
              </h3>
              <a
                href="https://github.com/fwangdo"
                className="text-sm text-gray-500 hover:text-blue-600 ml-4 shrink-0 transition-colors"
              >
                GitHub
              </a>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
              <li>Ported an OCaml-based interpreter to C++</li>
              <li>
                Implemented persistent data structures with structural sharing
              </li>
              <li>
                Leveraged smart pointers and virtual functions for memory
                management and polymorphism
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-semibold border-b-2 border-gray-900 pb-1">
          Skills
        </h2>
        <table className="text-sm w-full">
          <tbody>
            <tr>
              <td className="pr-6 pb-2 font-medium text-gray-500 align-top whitespace-nowrap">
                Languages
              </td>
              <td className="pb-2 text-gray-600">
                Python, JavaScript, C++, OCaml
              </td>
            </tr>
            <tr>
              <td className="pr-6 pb-2 font-medium text-gray-500 align-top whitespace-nowrap">
                Tools
              </td>
              <td className="pb-2 text-gray-600">
                Git, Linux, PyParsing, PyTorch, TensorFlow, LaTeX
              </td>
            </tr>
            <tr>
              <td className="pr-6 font-medium text-gray-500 align-top whitespace-nowrap">
                Specialization
              </td>
              <td className="text-gray-600">
                Compiler Front-end, Program Analysis, Program Testing
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Doyeon Hwang
      </footer>
    </main>
  );
}
