import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="flex flex-col font-quicksand my-32 text-xl lg:text-4xl lg:my-40 w-9/12 lg:w-3/6 mx-auto">
      <h1 className="font-bold">👋 hello world</h1>
      <h2 className="text-textGray lg:flex lg:text-4xl">
        i&apos;m studying to&nbsp;
        <div className="font-playfair font-bold text-accent">
          <Typewriter
            options={{
              strings: [
                "build cool software!",
                "challenge myself.",
                "make a difference.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </h2>
      <div className="my-12 space-x-6 lg:space-x-20 text-lg underline">
        <a href="https://www.linkedin.com/in/jackeyy/">linkedin</a>
        <a href="https://github.com/g00gol">github</a>
        <a
          href="../static/jackey-yang-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
      </div>
    </div>
  );
}
