"use client";
import Image from "next/image";
import { useState } from "react";
import postData from "@/data/post.json";
import SideMenu from "@/components/SideMenu";
import { motion } from "motion/react";
import {
  PostItemProfile,
  PostItemActionButton,
  PostItemActionButtonWrapper,
  PostItemDescription,
  PostItemImagesWrapper,
  PostItemWrapper,
} from "@/components/PostItem";
import Link from "next/link";

const Home = () => {
  const [activeTab, setActiveTab] = useState("following");

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <>
      <main className="relative mx-auto mt-5 flex max-w-7xl items-start justify-center gap-3 text-[#f3f5f7]">
        <SideMenu text="links" className="">
          <div>link</div>
        </SideMenu>

        <section className="w-full max-w-xl shrink-0">
          <nav className="flex w-full justify-between gap-0.5 rounded-xl border border-[#2d2d2d] bg-[#181818] p-1">
            <button
              title="following-page"
              onClick={() => setActiveTab("following")}
              className={`w-full cursor-pointer rounded-lg py-2 text-center font-semibold duration-100 ${
                activeTab === "following" ? "bg-white/5" : ""
              }`}
            >
              Following
            </button>
            <button
              title="for-you-page"
              onClick={() => setActiveTab("foryou")}
              className={`w-full cursor-pointer rounded-lg py-2 text-center font-semibold duration-100 ${
                activeTab === "foryou" ? "bg-white/5" : ""
              }`}
            >
              For You
            </button>
          </nav>

          <article className="mt-3 rounded-xl border border-[#2d2d2d] bg-[#181818]">
            {postData.map((datas, index) => (
              <PostItemWrapper key={index + 1}>
                <PostItemProfile
                  name={"jane doe"}
                  username={"janedoe"}
                  image="/2.jpeg"
                  link="/"
                />
                <Link href={"/detail"} className="">
                  <PostItemDescription description={datas.description} />
                  <PostItemImagesWrapper>
                    {datas.images.map((data, index) => {
                      const isVideo = data.image.endsWith(".mp4");
                      return isVideo ? (
                        <video
                          key={index}
                          // controls
                          playsInline
                          autoPlay
                          loop
                          muted
                          className="object-cover w-auto h-64 max-w-lg rounded-lg"
                        >
                          <source src={data.image} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          key={index}
                          src={data.image}
                          width={600}
                          height={600}
                          loading="lazy"
                          alt="image_test"
                          className="object-cover w-auto h-64 max-w-lg rounded-lg"
                        />
                      );
                    })}
                  </PostItemImagesWrapper>
                </Link>

                <PostItemActionButtonWrapper>
                  <PostItemActionButton onClick={handleLike} likesCount={likes}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill={liked == true ? "#FF0000" : "#181818"}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke={liked == true ? "#2d2d2d" : "#fff"}
                      className="select-none size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </PostItemActionButton>
                  <PostItemActionButton likesCount={datas.comment_count}>
                    <Image
                      src={"/icons/comment.svg"}
                      height={24}
                      width={24}
                      alt="comment-icon"
                      className="text-white select-none size-6"
                    />
                  </PostItemActionButton>
                  <PostItemActionButton likesCount={datas.shere_count}>
                    <Image
                      src={"/icons/shere.svg"}
                      height={24}
                      width={24}
                      alt="comment-icon"
                      className="text-white select-none size-6"
                    />
                  </PostItemActionButton>
                </PostItemActionButtonWrapper>
              </PostItemWrapper>
            ))}
          </article>
        </section>

        <SideMenu text="sidebar" className="p-3">
          <Image
            className="mb-3 aspect-square w-full max-w-20 cursor-pointer rounded-full border border-[#2d2d2d] object-cover"
            src="/IMG_1730.jpg"
            alt="image"
            width="100"
            height="100"
          />
          <header className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-lg font-semibold">jane doe</h1>
              <h3 className="text-xs opacity-50">@janedoe</h3>
            </div>
            <motion.button
              title="edit-profile"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              className="px-3 py-2 text-xs font-light capitalize rounded-lg cursor-pointer bg-white/5 opacity-80"
            >
              edit profile
            </motion.button>
          </header>

          <p className="my-3 text-sm">aku sofuer enjiner</p>

          <div className="flex items-center gap-3 text-sm">
            <motion.button
              title="followers"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              className="flex items-center justify-center w-full gap-1 px-3 py-2 capitalize rounded-lg cursor-pointer bg-white/5"
            >
              <span className="font-semibold">30K</span>
              <span>followers</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1 }}
              className="flex items-center justify-center w-full gap-1 px-3 py-2 capitalize rounded-lg cursor-pointer bg-white/5"
            >
              <span className="font-semibold">45</span>
              <span>following</span>
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1 }}
            className="w-full py-2 mt-3 text-sm capitalize rounded-lg cursor-pointer bg-white/5"
          >
            view profile
          </motion.button>
        </SideMenu>
      </main>

      <motion.button
        title="add-post"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        className="fixed right-10 bottom-10 cursor-pointer rounded-xl border border-[#2d2d2d] bg-[#181818] p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="size-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </motion.button>
    </>
  );
};

export default Home;
