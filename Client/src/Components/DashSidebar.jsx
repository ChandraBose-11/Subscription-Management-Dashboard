import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
} from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiCreditCard,
  HiCollection,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../Redux/Slice/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  // SIGN OUT
  const handleSignout = async () => {
    try {
      const res = await fetch(
        "https://subscription-management-dashboard-1.onrender.com/api/user/signout",
        {
          method: "POST",
          credentials: "include",
        }
      );
      if (res.ok) {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className="w-full md:w-full dark:bg-gray-800/70 ">
      <SidebarItemGroup className="flex flex-col gap-1 ">

        {/* PROFILE */}
        <Link to="/dashboard?tab=profile">
          <SidebarItem
            active={tab === "profile"}
            icon={HiUser}
            label={currentUser?.isAdmin === "admin" ? "Admin" : "User"}
            labelColor="dark"
            as="div"
          >
            Profile
          </SidebarItem>
        </Link>

        {/* PLANS – ALL USERS */}
        <Link to="/dashboard?tab=plans">
          <SidebarItem
            active={tab === "plans"}
            icon={HiCollection}
            as="div"
          >
            Plans
          </SidebarItem>
        </Link>

        {/* MY SUBSCRIPTION – LOGGED-IN USER */}
        <Link to="/dashboard?tab=subscription">
          <SidebarItem
            active={tab === "subscription"}
            icon={HiCreditCard}
            as="div"
          >
            My Subscription
          </SidebarItem>
        </Link>

        {/* ADMIN ONLY – ALL SUBSCRIPTIONS */}
        {currentUser?.isAdmin === "admin" && (
          <Link to="/dashboard?tab=adminSubs">
            <SidebarItem
              active={tab === "adminSubs"}
              icon={HiOutlineUserGroup}
              as="div"
            >
              All Subscriptions
            </SidebarItem>
          </Link>
        )}

        {/* SIGN OUT */}
        <SidebarItem
          icon={HiArrowSmRight}
          className="cursor-pointer"
          onClick={handleSignout}
        >
          Sign Out
        </SidebarItem>

      </SidebarItemGroup>
    </Sidebar>
  );
}
