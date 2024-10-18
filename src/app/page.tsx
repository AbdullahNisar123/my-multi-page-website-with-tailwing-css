import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col justify-center items-center bg-gray-100 text-center p-8">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-700 max-w-2xl">This is a responsive homepage styled using Tailwind CSS.</p>
      </main>
    </div>
  );
}
