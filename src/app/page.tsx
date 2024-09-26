import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <img
            src="\assets\images\rr.png"
            alt="Error! Page not found"
            title="Error! Page not found"
            className=" max-width: 100%; max-height: 60vh; margin: 0 auto;"
          ></img>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-solid border-black text-black hover:bg-black hover:text-white transition-colors flex items-center justify-center hover:border-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfU0Fb1oO-SlkTbcQi4nVFbYtFuOFkViJEAaLLkFvu8TwpTqg/viewform"
          >
            Go to Purchase Plan
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-solid border-black text-black hover:bg-black hover:text-white transition-colors flex items-center justify-center hover:border-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://docs.google.com/forms/d/e/1FAIpQLSferf3xJxB0X8A8gGuF-ea390UX6u7NVOIlUlW0oxE6Iau-pA/viewform"
          >
            Go to WAREHOUSE IMPORT - EXPORT PLAN
          </Link>
        </div>
      </main>
    </div>
  );
}
