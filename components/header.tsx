import Link from "next/link"

export function Header({ minimal = false }: { minimal?: boolean }) {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl text-purple-900">CourseHub</span>
          </Link>
        </div>
        {!minimal && (
          <nav className="flex flex-1 items-center justify-end space-x-4">
            <Link href="/#preview" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Preview
            </Link>
            <Link href="/signup" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              Sign Up
            </Link>
            <Link href="/checkout" className="text-sm font-medium text-purple-600 hover:text-purple-700">
              Full Course
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
