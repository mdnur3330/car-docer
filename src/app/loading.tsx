export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-teal-500 border-dashed rounded-full animate-spin"></div>

        {/* Text */}
        <p className="mt-6 text-gray-700 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
