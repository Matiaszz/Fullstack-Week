import { UserButton } from "@clerk/nextjs";
// import { Button } from "./_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const Home = async () => {
  const { userId } = await auth();
  console.log("userid", userId);
  if (!userId) {
    return redirect("/login");
  }

  return (
    <div className="flex h-full items-center justify-center">
      <UserButton showName />
    </div>
  );
};
export default Home;
