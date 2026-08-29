export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border-subtle)] py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-muted)]">
          © {currentYear} Yubraj Adhikari
        </p>
      </div>
    </footer>
  );
}
