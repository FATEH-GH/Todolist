import { MdPushPin } from "react-icons/md";

export default function Home() {
  return (
    <main className=" flex items-center justify-center ">
      <div className="bg-gray-700">
        <h1>hi there</h1>
        <MdPushPin
          style={{ color: "purple" }}
          size={"25px"}
          className="-rotate-45 color-red"
        />
      </div>
    </main>
  );
}

{
  /* <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="lucide lucide-linkedin"
>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect width="4" height="12" x="2" y="9" />
  <circle cx="4" cy="4" r="2" />
</svg>; */
}
