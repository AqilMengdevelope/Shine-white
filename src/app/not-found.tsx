import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center">
      <p className="tag">404</p>
      <h1 className="mt-3 text-4xl font-bold">We could not find that page</h1>
      <p className="mt-4 text-muted">It may have moved when the site was rebuilt.</p>
      <Link href="/" className="btn btn-primary mt-8">Back to home</Link>
    </section>
  );
}
