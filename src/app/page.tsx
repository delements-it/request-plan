import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex justify-center flex-col gap-8 row-start-2 items-center">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <img
            src="\assets\images\rr.png"
            alt="RootRotation"
            title="RootRotation"
            className="max-width: 100%; max-height: 60vh; margin: 0 auto;"
          ></img>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-column">
          {/* <Link
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-gray-300 text-black flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-center group relative overflow-hidden transition-all duration-300 hover:rounded-[25px] hover:border-transparent"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfU0Fb1oO-SlkTbcQi4nVFbYtFuOFkViJEAaLLkFvu8TwpTqg/viewform"
          >
            <span className="relative z-10">Purchase Plan</span>
            <span className="absolute inset-0 border-2 rounded-full border-transparent group-hover:rounded-[25px] group-hover:bg-gradient-to-r group-hover:from-[#E9BB56] group-hover:via-[#C95B4F] group-hover:via-[#398EBB] group-hover:to-[#257C61] group-hover:bg-[length:200%_100%] group-hover:animate-border-slide pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></span>
          </Link> */}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-gray-300 text-black flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-center group relative overflow-hidden transition-all duration-300 hover:rounded-[25px] hover:border-transparent"
            href="https://docs.google.com/forms/d/e/1FAIpQLSferf3xJxB0X8A8gGuF-ea390UX6u7NVOIlUlW0oxE6Iau-pA/viewform"
          >
            <span className="relative z-10">WAREHOUSE IMPORT - EXPORT PLAN</span>
            <span className="absolute inset-0 border-2 rounded-full border-transparent group-hover:rounded-[25px] group-hover:bg-gradient-to-r group-hover:from-[#E9BB56] group-hover:via-[#C95B4F] group-hover:via-[#398EBB] group-hover:to-[#257C61] group-hover:bg-[length:200%_100%] group-hover:animate-border-slide pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></span>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-gray-300 text-black flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-center group relative overflow-hidden transition-all duration-300 hover:rounded-[25px] hover:border-transparent"
            href="https://forms.gle/RMuQrD5NUfEKr8HDA"
          >
            <span className="relative z-10">SKU Creation Request Form</span>
            <span className="absolute inset-0 border-2 rounded-full border-transparent group-hover:rounded-[25px] group-hover:bg-gradient-to-r group-hover:from-[#E9BB56] group-hover:via-[#C95B4F] group-hover:via-[#398EBB] group-hover:to-[#257C61] group-hover:bg-[length:200%_100%] group-hover:animate-border-slide pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></span>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-gray-300 text-black flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 text-center group relative overflow-hidden transition-all duration-300 hover:rounded-[25px] hover:border-transparent"
            href="https://forms.gle/8aF6NJyrXkLErfvK9"
          >
            <span className="relative z-10">Quarterly MOQ Request Form</span>
            <span className="absolute inset-0 border-2 rounded-full border-transparent group-hover:rounded-[25px] group-hover:bg-gradient-to-r group-hover:from-[#E9BB56] group-hover:via-[#C95B4F] group-hover:via-[#398EBB] group-hover:to-[#257C61] group-hover:bg-[length:200%_100%] group-hover:animate-border-slide pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></span>
          </Link>
        </div>
      </main>
    </div>
  );
}