import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-44">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        Back to{" "}
        <Link href="/" className="italic text-indigo-500">
          HomePage
        </Link>
      </p>
    </div>
  );
}
