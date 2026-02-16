export default function Projects() {
  return (
    <>
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
    </>
  );
}
