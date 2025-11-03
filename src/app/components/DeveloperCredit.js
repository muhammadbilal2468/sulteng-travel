// src/app/components/DeveloperCredit.js
export default function DeveloperCredit() {
  return (
    <div className="fixed bottom-3 right-3 z-40 md:bottom-4 md:right-4">
      <div className="bg-black bg-opacity-80 text-white px-2 py-1 rounded-full text-xs shadow-lg md:px-3 md:py-1.5 md:text-sm">
        <span className="text-gray-300 hidden sm:inline">By </span>
        <span className="font-semibold text-blue-300">
          <span className="hidden sm:inline">Muhammad </span>Bilal
        </span>
      </div>
    </div>
  );
}
