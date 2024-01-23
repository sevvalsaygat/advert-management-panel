import Link from "next/link";

import { NewAdvert as NewAdvertContainer } from "@app/containers";

export default function NewAdvert() {
  return (
    <div>
      <Link href="/">
        <button>New Adverts</button>
      </Link>
      <NewAdvertContainer.Form />
    </div>
  );
}
