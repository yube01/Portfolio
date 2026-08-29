export default function Layout({ children, id }) {
  return (
    <section id={id} className="py-20 md:py-28">
      {children}
    </section>
  );
}
