import Link from "next/link"

export function Footer({ minimal = false }: { minimal?: boolean }) {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <div className="text-center text-sm text-gray-500 md:text-left">
          &copy; {new Date().getFullYear()} CourseHub. All rights reserved.
        </div>
        {!minimal && (
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </footer>
  )
}
