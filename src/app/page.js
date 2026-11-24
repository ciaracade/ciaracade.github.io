
export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 z-10 flex justify-center font-sans overflow-y-auto">
        <div className="text-grey text-left max-w-2xl p-8 mb-12">
          <h1 className="text-2xl font-bold text-black">
            {" "}
            Ciara Cade
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
            Hello, my name is Ciara. I'm a Software Engineer at Bloomberg and incoming
            Computer Science Graduate Student at @ Georgia Institute of Technology.
          </div>
          <p className="text-sm mb-4">
            
            I'm currently rebuilding my mathematical foundation starting from Algebra and Pre-Calulus.
            I'm also a Content Creator with 34k+ total following across LinkedIn, Instagram, Tiktok, and X.
            In my free time, I like to read books about interesting people and learn chess and poker. 
          </p>
          <p className="text-sm mb-4">
            <span className="font-bold">Current Interests:</span> Math, Chess, Poker, Machine Learning, (auto)biographies of really interesting people
          </p>
          <section className="mb-8">
            <h2 className="text-lg font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-base font-bold">Software Engineer</h3>
                    <p className="text-sm italic">Bloomberg</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">August 2026- Present</p>
                    <p className="text-sm italic">New York, New York</p>
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
              <div>
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
          </section>{" "}
        </div>
      </div>
    </div>
  );
}
