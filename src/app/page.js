import { LinkPreview } from "@/components/ui/link-preview";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-10 flex justify-center font-sans overflow-y-auto">
        <div className="text-grey text-left max-w-2xl p-8 my-12">
          <h1 className="text-2xl font-bold text-black">
            {" "}
            <LinkPreview
              url="https://www.linkedin.com/in/ciaracade"
              className="text-black"
            >
              <span className="text-black">Ciara Cade</span>
            </LinkPreview>
          </h1>

          <div className="flex items-center space-x-2 text-sm mb-4">
            <a
              href="mailto:cadeci@umich.edu"
              className="text-black hover:text-gray-300 transition-colors"
            >
              cadeci@umich.edu
            </a>
            <span className="text-gray-500">x</span>
            <a
              href="https://www.linkedin.com/in/ciaracade"
              className="text-black hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span className="text-gray-500">x</span>
            <a
              href="https://twitter.com/ciaraAcade"
              className="text-black hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <span className="text-gray-500">x</span>
            <a
              href="https://github.com/ciaracade"
              className="text-black hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </div>

          <p className="text-sm mb-4">
            Computer Science student at @ University of Michigan.
          </p>
          <p className="text-sm mb-4">
            Content Creator with 25k+ total following.
          </p>
          <p className="text-sm mb-4">
            Currently building{" "}
            <LinkPreview url="https://sourceship.dev" className="text-black">
              <span className="text-black font-bold">Sourceship.dev</span>
            </LinkPreview>{" "}
            , the{" "}
            <span className="font-bold">
              open-source internship alternative
            </span>{" "}
            inspired by my prev project building community of{" "}
            <span className="font-bold">3,100+</span> users.
          </p>
          <p className="text-sm mb-4">
            <span className="font-bold">Interests:</span> AI infrastructure, LLM
            toolchains, Model Context Protocol, backend systems, etc.
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              {/*
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">
                      Software Engineer Intern
                    </h3>
                    <p className="text-sm italic">Mercury</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Incoming September 2025</p>
                    <p className="text-sm italic">Remote</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">Founder</h3>
                    <p className="text-sm italic">SourceShip.dev</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">April 2025 – Present</p>
                    <p className="text-sm italic">Remote</p>
                  </div>
                </div>
              </div>
              */}
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">
                      Computer Information Technology Consultant
                    </h3>
                    <p className="text-sm italic">
                      University of Michigan Biomedical Engineering Dept
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Nov 2023 – Present</p>
                    <p className="text-sm italic">Ann Arbor, MI</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-base font-bold">
                    Software Development Engineer Intern
                  </h3>
                  <p className="text-sm italic">Amazon</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">May 2025 - August 2025</p>
                  <p className="text-sm italic">Seattle, WA</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">
                      Software Engineer Intern
                    </h3>
                    <p className="text-sm italic">Uber Technologies Inc.</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">May 2024 – Aug 2024</p>
                    <p className="text-sm italic">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">
                      Software Engineer Intern
                    </h3>
                    <p className="text-sm italic">Capital One</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">June 2023 – August 2023</p>
                    <p className="text-sm italic">McLean, VA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Awards</h2>
            <div className="space-y-2 text-sm">
              <div className="flex">
                <span className="font-bold">
                  1<sup>st</sup>
                  <span className="ml-1">Place Team</span>
                </span>
                <span className="ml-1 text-black-300">
                  - JP Morgan Chase Code for Good Hackathon
                </span>
              </div>
              <div className="flex">
                <span className="font-bold">
                  1<sup>st</sup>
                  <span className="ml-1">Place Team</span>
                </span>
                <span className="ml-1 text-black-300">
                  - Capital One Banking for Good Hackathon
                </span>
              </div>
              <div className="flex">
                <span className="font-bold">
                  Contributions to Tech Community
                </span>
                <span className="ml-1 text-black-300">
                  - OpenAI Scholarship Recipient
                </span>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Projects</h2>
            <p className="text-sm text-gray-500 italic">Coming soon...</p>
          </section>
        </div>
      </div>
    </div>
  );
}
