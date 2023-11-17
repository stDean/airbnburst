"use client";

import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

interface UserMenuProps {
  currentUser: string | null;
}

const UserMenu: FC<UserMenuProps> = ({ currentUser }: UserMenuProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          // onClick={onRent}
        >
          Airbnb your home
        </div>

        <div
          onClick={toggleOpen}
          className=" p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />

          <div className="hidden md:block">
            <Avatar
              // src={currentUser?.image}
              src={null}
            />
          </div>
        </div>

        {isOpen && (
          <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
            <div className="flex flex-col cursor-pointer">
              {currentUser ? (
                <>
                  <MenuItem
                    label="My trips"
                    onClick={() => router.push("/trips")}
                  />
                  <MenuItem
                    label="My favorites"
                    onClick={() => router.push("/favorites")}
                  />
                  <MenuItem
                    label="My reservations"
                    onClick={() => router.push("/reservations")}
                  />
                  <MenuItem
                    label="My properties"
                    onClick={() => router.push("/properties")}
                  />
                  <MenuItem
                    label="Airbnb your home"
                    // onClick={rentModal.onOpen}
                    onClick={() => {
                      console.log("open modal");
                    }}
                  />
                  <hr />
                  <MenuItem label="Logout" onClick={() => signOut()} />
                </>
              ) : (
                <>
                  <MenuItem
                    label="Login"
                    // onClick={loginModal.onOpen}
                    onClick={() => {
                      console.log("open login modal");
                    }}
                  />
                  <MenuItem
                    label="Sign up"
                    // onClick={registerModal.onOpen}
                    onClick={() => {
                      console.log("open register modal");
                    }}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
