import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";

export default function Home() {
  const cm = []
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner ImagePath={"/profileImages/handsome.jpg"} name = {"Chittapan Phahongsa 660610747"} massages={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"} likes={100}/>

        {/* Comment Example */}
        
          <Comment
          ImagePath={"/profileImages/lisa.jpg"}
          username={"Lisa"}
          commentTitle={"จริงค่า"}
          likes={999}
          replies={0}
          />
        

        {/* Reply Example */}
        <Reply ImagePath={"/profileImages/puppy.jpg"} username={"หมาน้อย"} replyTitle={"จริงค้าบบบบบบบบ"} likes={2}/>
        <Reply ImagePath={"/profileImages/popcat.png"} username={"Cat Meme"} replyTitle={"ลิซ่าาาาา"} likes={0}/>
        {/* map-loop render Comment component here */}
        <Comment
          ImagePath={"/profileImages/charliebrown.jpg"}
          username={"charliebrown"}
          commentTitle={"บ้าไปแล้ว"}
          likes={0}
          replies={0}
          />
      </div>
    </div>
  );
}
