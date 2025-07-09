/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import postData from "@/data/post.json";

const Home = () => {
  const [activeTab, setActiveTab] = useState("following");
  return (
    <main className="relative mx-auto mt-5 flex max-w-7xl justify-center gap-5 text-[#f3f5f7]">
      <aside className="sticky top-5 hidden h-72 w-full rounded-xl border border-[#2d2d2d] bg-[#181818] xl:block">
        <span className="sr-only">links</span>
      </aside>

      <section className="w-full max-w-2xl shrink-0">
        <div className="flex w-full justify-between gap-0.5 rounded-xl border border-[#2d2d2d] bg-[#181818] p-1">
          <button
            onClick={() => setActiveTab("following")}
            className={`w-full cursor-pointer rounded-lg py-2 text-center font-semibold duration-100 ${
              activeTab === "following" ? "bg-black/30" : ""
            }`}
          >
            Following
          </button>
          <button
            onClick={() => setActiveTab("foryou")}
            className={`w-full cursor-pointer rounded-lg py-2 text-center font-semibold duration-100 ${
              activeTab === "foryou" ? "bg-black/30" : ""
            }`}
          >
            For You
          </button>
        </div>

        <div className="sticky mt-5 flex cursor-text items-center justify-between rounded-xl border border-[#2d2d2d] bg-[#181818] p-3">
          <div className="flex items-center gap-3">
            <Image
              className="object-cover w-full ml-1 rounded-full cursor-pointer aspect-square max-w-10"
              src="/IMG_1730.jpg"
              alt="image"
              width="50"
              height="50"
            />
            <h2 className="w-full opacity-50">What&apos;s new?</h2>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cursor-pointer size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>

        <div className="mt-5 rounded-xl border border-[#2d2d2d] bg-[#181818]">
          {postData.map((datas) => (
            <div
              className="gap- flex flex-col border-b border-[#2d2d2d]"
              key={datas.id}
            >
              <div className="flex items-center justify-between px-3 pt-3 mb-5">
                <Link href={""} className="flex items-center gap-3">
                  <Image
                    className="object-cover w-full rounded-full cursor-pointer aspect-square max-w-10"
                    src="/IMG_1730.jpg"
                    alt="image"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h1 className="font-semibold">jane doe</h1>
                    <h3 className="text-xs opacity-50">@janedoe</h3>
                  </div>
                </Link>

                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </button>
              </div>

              <div className="py-1 overflow-x-auto pointer-events-auto no-scrollbar cursor-grab scroll-smooth whitespace-nowrap active:cursor-grabbing">
                <div className="flex items-center gap-2 ml-16 mr-5 w-max">
                  {datas.images.map((data, index) => {
                    const isVideo =
                      data.image.endsWith(".mp4") ||
                      data.image.endsWith(".webm") ||
                      data.image.endsWith(".ogg") ||
                      data.image.endsWith(".ogv") ||
                      data.image.endsWith(".mov") ||
                      data.image.endsWith(".m4v") ||
                      data.image.endsWith(".avi") ||
                      data.image.endsWith(".flv") ||
                      data.image.endsWith(".wmv") ||
                      data.image.endsWith(".3gp") ||
                      data.image.endsWith(".mkv");

                    return isVideo ? (
                      <video
                        key={index}
                        // controls
                        playsInline
                        autoPlay
                        loop
                        muted
                        className="object-cover w-auto max-w-xl rounded-lg h-72"
                      >
                        <source src={data.image} type="video/mp4" />
                        Browser kamu tidak mendukung video.
                      </video>
                    ) : (
                      <Image
                        key={index}
                        src={data.image}
                        width={600}
                        height={600}
                        alt="image_test"
                        className="object-cover w-auto max-w-xl rounded-lg h-72"
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-10 py-5 ml-16">
                <span className="flex items-center gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FF0000"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#2d2d2d"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <h4 className="uppercase">100</h4>
                </span>

                <span className="flex items-center gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                    />
                  </svg>
                  <h4 className="uppercase">1K</h4>
                </span>

                <span className="flex items-center gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                  <h4 className="uppercase">24</h4>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="sticky top-5 hidden h-72 w-full rounded-xl border border-[#2d2d2d] bg-[#181818] xl:block">
        <span className="sr-only">profile</span>
      </aside>
    </main>
  );
};

export default Home;
