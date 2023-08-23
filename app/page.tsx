import HomeClient from "@/components/Home/Home";
import Profile from "@/components/Home/Profile";
import Laycom from "@/components/shared/Laycom";

export default function Home() {
  return (
    <Laycom>
      <Profile />
      <section className="relative overflow-hidden py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative z-[3] mx-auto max-w-3xl xl:ml-auto xl:mr-0">
            <HomeClient />
          </div>
        </div>
      </section>
    </Laycom>
  );
}
