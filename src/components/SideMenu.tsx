type SideMenuProps = {
  text: string;
  children: React.ReactNode;
  className: string;
};

const SideMenu = (props: SideMenuProps) => {
  return (
    <aside
      className={`sticky top-3 hidden w-full rounded-xl border border-[#2d2d2d] bg-[#181818] xl:block ${props.className}`}
    >
      <span className="sr-only">{props.text}</span>
      {props.children}
    </aside>
  );
};

export default SideMenu;
