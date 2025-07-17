import Image from "next/image";
import Link from "next/link";

type PostItemWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

type PostItemProfileProps = {
  name: string;
  username: string;
  image: string;
  link: string;
  className?: string;
};

type PostItemDescriptionProps = {
  description: string;
  className?: string;
};

type PostItemImagesProps = {
  children: React.ReactNode;
};

type PostItemActionButtonWrapperProps = {
  children: React.ReactNode;
};

type PostItemActionButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  likesCount: number | string;
};

const PostItemWrapper = (props: PostItemWrapperProps) => {
  return (
    <div
      className={`flex flex-col ${props.className} rounded-b-xl border-b border-[#2d2d2d]`}
    >
      {props.children}
    </div>
  );
};

const PostItemProfile = (props: PostItemProfileProps) => {
  return (
    <figure
      className={`${props.className} flex items-center justify-between px-3 pt-3`}
    >
      <Link href={props.link} className="flex items-center gap-3">
        <Image
          className="aspect-square h-full w-full max-w-10 rounded-full border border-[#2d2d2d] object-cover"
          src={props.image}
          alt={`image-${props.username}`}
          width="50"
          height="50"
        />
        <figcaption>
          <h1 className="font-semibold">{props.name}</h1>
          <h3 className="text-xs opacity-50">@{props.username}</h3>
        </figcaption>
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
    </figure>
  );
};

const PostItemDescription = (props: PostItemDescriptionProps) => {
  return (
    <span>
      <p className={`ml-16 py-3 ${props.className}`}>{props.description}</p>
    </span>
  );
};

const PostItemImagesWrapper = (props: PostItemImagesProps) => {
  return (
    <figure className="no-scrollbar pointer-events-auto cursor-grab overflow-x-auto scroll-smooth py-1 whitespace-nowrap active:cursor-grabbing">
      <div className="mr-5 ml-16 flex w-max items-center gap-2">
        {props.children}
      </div>
    </figure>
  );
};

const PostItemActionButtonWrapper = (
  props: PostItemActionButtonWrapperProps,
) => {
  return (
    <div className="ml-16 flex items-center gap-3 py-2">{props.children}</div>
  );
};

const PostItemActionButton = (props: PostItemActionButtonProps) => {
  return (
    <span
      className="flex cursor-pointer items-center gap-1 rounded-xl px-3 py-2 transition-colors duration-100 hover:bg-white/5"
      onClick={props.onClick}
    >
      {props.children}
      <h4 className="font-mono uppercase select-none">{props.likesCount}</h4>
    </span>
  );
};

export {
  PostItemWrapper,
  PostItemProfile,
  PostItemDescription,
  PostItemImagesWrapper,
  PostItemActionButtonWrapper,
  PostItemActionButton,
};
