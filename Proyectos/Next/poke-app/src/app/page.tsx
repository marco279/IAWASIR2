import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="nav nav-pills flex-column flex-sm-row">
        <a className="flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Active</a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
        <a className="flex-sm-fill text-sm-center nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>
    </div>
  );
}
