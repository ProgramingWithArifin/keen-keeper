import Banner from "@/component/Banner";
import Friend from "@/component/Friend";

export default async function Home() {
  const res = await fetch('http://localhost:3000/data.json')
  const friendsdata = await res.json()
  const {friends} = friendsdata
  return (
    <div className="sm:max-w-[93%] mx-auto">
      <Banner friends={friends}></Banner>
      <div>
        <h2 className="text-xl font-bold my-5 text-center sm:text-left mx-2">
          Friends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-[96%] mx-auto justify-items-center">
          {friends.map((friend, index)=> <Friend key={index} friend={friend}></Friend>)}
        </div>
      </div>
    </div>
  );
}
