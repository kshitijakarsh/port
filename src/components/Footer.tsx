
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[250px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 text-xs">
            © {currentYear} Developed by Kshitij Akarsh
          </p>
        </div>
      </div>
    </footer>
  );
}
