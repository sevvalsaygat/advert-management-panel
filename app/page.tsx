import Link from "next/link";

import { Home as HomeContainer } from "@app/containers";

export default function Home() {
  return (
    <div>
      <Link href="/adverts/new">
        <button>Home</button>
      </Link>
      <div className="flex items-center justify-center">
        <HomeContainer.List />
      </div>
    </div>
  );
}
