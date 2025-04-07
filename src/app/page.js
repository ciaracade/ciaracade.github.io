import { BackgroundBeams } from "@/components/ui/background-beams";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <BackgroundBeams />
      <div className="absolute inset-0 z-10 flex justify-center font-sans overflow-y-auto">
        <div className="text-white text-left max-w-2xl p-8 my-12">
          <h1 className="text-2xl font-bold text-white">
            {" "}
            <LinkPreview
              url="https://www.linkedin.com/in/ciaracade"
              className="text-white"
            >
              <span className="text-white">Ciara Cade</span>
            </LinkPreview>
          </h1>

          <div className="flex items-center space-x-2 text-sm mb-4">
            <a
              href="mailto:cadeci@umich.edu"
              className="text-white hover:text-gray-300 transition-colors"
            >
              cadeci@umich.edu
            </a>
            <span className="text-gray-500">x</span>
            <a
              href="https://www.linkedin.com/in/ciaracade"
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span className="text-gray-500">x</span>
            <a
              href="https://twitter.com/ciaraAcade"
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <span className="text-gray-500">x</span>
            <a
              href="https://github.com/ciaracade"
              className="text-white hover:text-gray-300 transition-colors"
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
            <LinkPreview url="https://sourceship.dev" className="text-white">
              <span className="text-white font-bold">Sourceship.dev</span>
            </LinkPreview>{" "}
            , the{" "}
            <span className="font-bold">
              open-source internship alternative
            </span>{" "}
            inspired by my prev project building community of{" "}
            <span className="font-bold">3,100+</span> users.
          </p>
          <p className="text-sm mb-8">
            Want me to build your software?{" "}
            <a
              href="mailto:cadeci@umich.edu"
              className="text-white font-bold hover:text-gray-300 transition-colors"
            >
              Email me.
            </a>
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">
                      Software Development Intern
                    </h3>
                    <p className="text-sm italic">Amazon</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Incoming May 2025</p>
                    <p className="text-sm italic">Seattle, WA</p>
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
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">Freelance Developer</h3>
                    <p className="text-sm italic">Self-employed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Feb 2025 – Present</p>
                    <p className="text-sm italic">Remote</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">
                      Computer Information Technology Consultant
                    </h3>
                    <p className="text-sm italic">
                      UMich Biomedical Engineering
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Nov 2023 – Present</p>
                    <p className="text-sm italic">Ann Arbor, MI</p>
                  </div>
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
                    <p className="text-sm">Jun 2023 – Aug 2023</p>
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
                </span>
                <span className="ml-1">Place Team</span>
                <span className="ml-1 text-gray-300">
                  - JP Morgan Chase Code for Good Hackathon
                </span>
              </div>
              <div className="flex">
                <span className="font-bold">
                  1<sup>st</sup>
                </span>
                <span className="ml-1">Place Team</span>
                <span className="ml-1 text-gray-300">
                  - Capital One Banking for Good Hackathon
                </span>
              </div>
              <div className="flex">
                <span>Contributions to Tech Community</span>
                <span className="ml-1 text-gray-300">
                  - OpenAI Scholarship Recipient
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
