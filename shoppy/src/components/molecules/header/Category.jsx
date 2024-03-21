/** @format */

import React from "react";
import Link from "components/atom/Link";
import { BsPencilFill } from "react-icons/bs";
import Button from "components/atom/Button";
import User from "./User";
import { useAuthContext } from "context/Authcontext";
import CartStatus from "../cart/CartStatus";

export default function Category() {
  const buttonStyle = "px-5 py-2 bg-red-400 text-white hover:brightness-110";
  const { user, login, logout } = useAuthContext();
  return (
    <div className="h-full flex items-center capitalize font-semibold shrink-0">
      <Link linkUrl="/product" name="products" styleName="" />
      {user && (
        <>
          <Link linkUrl="/carts" name="carts" styleName="">
            <CartStatus />
          </Link>
          {user.isAdmin && (
            <Link linkUrl="/product/new" name="newProduct" styleName="">
              <BsPencilFill />
            </Link>
          )}
          <User user={user} />
        </>
      )}
      {!user && (
        <Button onClick={() => login()} styleName={buttonStyle}>
          Login
        </Button>
      )}
      {user && (
        <Button onClick={() => logout()} styleName={buttonStyle}>
          Logout
        </Button>
      )}
    </div>
  );
}
