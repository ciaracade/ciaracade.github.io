import { LinkPreview } from "@/components/ui/link-preview";
import { RecentPRs } from "@/components/RecentPRs";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-10 flex justify-center font-sans overflow-y-auto">
        <div className="text-grey text-left max-w-2xl p-8 mb-12">
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
            <span className="text-gray-500">x</span>
            <a
              href="https://drive.google.com/drive/folders/1_uZ5HmZ6rVMpGX6fvH-nYQjnMBCxTbHi?usp=sharing"
              className="text-black hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </div>

          <div className="text-sm mb-4">
            Computer Science Senior at @{" "}
            <LinkPreview url="https://umich.edu/" className="text-black">
              <span className="text-black font-bold">
                University of Michigan
              </span>
              .
            </LinkPreview>
          </div>
          <p className="text-sm mb-4">
            Content Creator with 31k+ total following across LinkedIn,
            Instagram, Tiktok, and X.
          </p>
          <div className="text-sm mb-4">
            Building{" "}
            <LinkPreview url="https://finulabs.com" className="text-black">
              <span className="text-black font-bold">FinuLabs</span>
            </LinkPreview>
            , the{" "}
            <span className="font-bold">
              regulatory operating system for advanced reactor developers.
            </span>
          </div>
          <div className="text-sm mb-4">
            Built{" "}
            <LinkPreview url="https://sourceship.dev" className="text-black">
              <span className="text-black font-bold">Sourceship.dev</span>
            </LinkPreview>
            , the{" "}
            <span className="font-bold">
              open-source internship alternative
            </span>{" "}
            inspired by my prev project building community of{" "}
            <span className="font-bold">3,100+</span> users.
          </div>
          <p className="text-sm mb-4">
            <span className="font-bold">Interests:</span> open source
            contributing, backend systems, databases, AI infra/tools, context
            engineering, MCPs etc.
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              {/* 
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">Founder</h3>
                    <p className="text-sm italic">SourceShip.dev</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">August 2025 – Present</p>
                    <p className="text-sm italic">Remote</p>
                  </div>
                </div>
              </div>
              */}
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">Software Engineer</h3>
                    <p className="text-sm italic">Bloomberg</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">August 2026</p>
                    <p className="text-sm italic">New York, New York</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">Cofounder/CTO</h3>
                    <p className="text-sm italic">FinuLabs</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">April 2026 - Present</p>
                    <p className="text-sm italic">Ann Arbor, Michigan</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">
                      Software Engineer Intern
                    </h3>
                    <p className="text-sm italic">Mercury</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">January 2025 - May 2026</p>
                    <p className="text-sm italic">Remote</p>
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
                      Computer Information Technology Consultant
                    </h3>
                    <p className="text-sm italic">
                      University of Michigan Biomedical Engineering Department
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Nov 2023 – May 2025</p>
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
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold">
                    <a
                      href="https://sourceship.dev"
                      className="text-black hover:text-gray-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SourceShip.dev
                    </a>
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                    Building
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  Open-source internship alternative connecting developers with
                  real-world projects
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-semibold">Built with:</span> Next.js,
                  React, TypeScript, Supabase, Tailwind CSS
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold">
                    <a
                      href="https://github.com/ciaracade/MorphosisAI"
                      className="text-black hover:text-gray-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MorphosisAI
                    </a>
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                    Building
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  AI-powered stream aggregation UI for Apache Kafka pipelines
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-semibold">Built with:</span> TypeScript,
                  React
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold">
                    <a
                      href="https://github.com/ciaracade/umich-mcp"
                      className="text-black hover:text-gray-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UMich MCP Server
                    </a>
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                    Building
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  Model Context Protocol server using University of Michigan
                  public APIs
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-semibold">Built with:</span> TypeScript,
                  Turborepo
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold">
                    <a
                      href="https://github.com/ciaracade/graded-aws-metric-api"
                      className="text-black hover:text-gray-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Graded AWS Metric API
                    </a>
                  </h3>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-800 rounded">
                    Finished
                  </span>{" "}
                  {/* For anything thats being "maintained", do a blue tag instead */}
                </div>
                <p className="text-sm text-gray-700">
                  API that grades AWS VPC subnet utilization and provides
                  configuration recommendations
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-semibold">Built with:</span> Python,
                  Flask, SQLAlchemy, Boto3, LocalStack, Docker
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Recent Pull Requests</h2>
            <RecentPRs />
          </section>

          <section className="mb-16">
            <h2 className="text-lg font-bold mb-4">Blog</h2>
            <p className="text-sm text-gray-500 italic">Coming soon...</p>
          </section>
        </div>
      </div>
    </div>
  );
}
