"use client";

import {
  PostItemActionButton,
  PostItemActionButtonWrapper,
  PostItemDescription,
  PostItemImagesWrapper,
  PostItemProfile,
  PostItemWrapper,
} from "@/components/PostItem";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import postData from "@/data/post.json";

const Detail = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const commentRef = useRef<HTMLTextAreaElement>(null);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const data = postData[1];

  const focusToTextarea = () => {
    commentRef.current?.focus();
  };
  return (
    <main className="relative mx-auto mt-3 flex max-w-2xl flex-col items-center justify-center gap-3 text-black dark:text-[#f3f5f7]">
      <div className="flex w-full items-center justify-between">
        <Link
          href={"/"}
          title="Back to home"
          className="flex items-center justify-center rounded-full border border-[#2d2d2d] p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        <Link href={"/"} className="font-semibold">
          ShowHub
        </Link>
        <button
          title="Bookmark"
          className="flex cursor-pointer items-center justify-center rounded-full border border-[#2d2d2d] p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </button>
      </div>
      <section className="w-full shrink-0">
        <article className="mt- rounded-xl border border-[#2d2d2d] bg-[#181818]">
          <PostItemWrapper className="border-none">
            <PostItemProfile
              name={"jane doe"}
              username={"janedoe"}
              image="/2.jpeg"
              link="/"
            />
            <Link href={"/detail"} className="">
              <PostItemDescription description={data.description} />
              <PostItemImagesWrapper>
                {data.images.map((data, index) => {
                  const isVideo = data.image.endsWith(".mp4");
                  return isVideo ? (
                    <video
                      key={index}
                      controls
                      playsInline
                      autoPlay
                      loop
                      muted
                      className="h-64 w-auto max-w-lg rounded-lg object-cover"
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
                      className="w-full max-w-lg rounded-lg object-cover"
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
                  className="size-6 select-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </PostItemActionButton>
              <PostItemActionButton
                likesCount={data.comment_count}
                onClick={focusToTextarea}
              >
                <Image
                  src={"/icons/comment.svg"}
                  height={24}
                  width={24}
                  alt="comment-icon"
                  className="size-6 text-white select-none"
                />
              </PostItemActionButton>
              <PostItemActionButton likesCount={data.shere_count}>
                <Image
                  src={"/icons/shere.svg"}
                  height={24}
                  width={24}
                  alt="comment-icon"
                  className="size-6 text-white select-none"
                />
              </PostItemActionButton>
            </PostItemActionButtonWrapper>

            <span className="mx-3 mb-5 border border-[#2d2d2d]"></span>

            <form
              action=""
              className="mx-3 mb-3 flex items-end rounded-lg border border-[#2d2d2d] bg-white/5 p-3"
            >
              <textarea
                name=""
                id=""
                ref={commentRef}
                placeholder="Tulis komentar..."
                rows={1}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height = `${target.scrollHeight}px`;
                }}
                className="focus:none w-full resize-none overflow-hidden focus:border-transparent focus:ring-0 focus:outline-none"
              ></textarea>

              <button className="ml-3 cursor-pointer">
                <Image
                  src={"/icons/plane.svg"}
                  height={24}
                  width={24}
                  alt="comment-icon"
                  className="size-6 text-white select-none"
                />
              </button>
            </form>

            <div>
              <PostItemProfile
                name={"jane doe"}
                username={"janedoe"}
                image="/2.jpeg"
                link="/"
              />
              <PostItemDescription
                description={data.description}
                className="!py-2"
              />
              <div className="ml-16 flex items-center gap-3 pb-3">
                <PostItemActionButton onClick={handleLike} likesCount={likes}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked == true ? "#FF0000" : "#181818"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={liked == true ? "#2d2d2d" : "#fff"}
                    className="size-6 select-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </PostItemActionButton>
                <PostItemActionButton likesCount={data.shere_count}>
                  <Image
                    src={"/icons/shere.svg"}
                    height={24}
                    width={24}
                    alt="comment-icon"
                    className="size-6 text-white select-none"
                  />
                </PostItemActionButton>
              </div>
            </div>
          </PostItemWrapper>
        </article>
      </section>
    </main>
  );
};

export default Detail;
