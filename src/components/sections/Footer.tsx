export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink/50 sm:flex-row lg:px-8">
        <p>© {year} All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="transition-colors hover:text-accent">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
