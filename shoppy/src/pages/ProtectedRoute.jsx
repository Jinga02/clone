/** @format */

import React from "react";
import { useAuthContext } from "context/Authcontext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, requireAdmin }) {
  /*
    로그인한 사용자가 있는지 확인
    그 사용자가 admin 권한이 있는지 확인
    requireAdmin이 true인 경우에는 로그인도 되어 있어야 하고, admin 권한도 가지고 있어야 함
    조건에 맞지 않으면 상위 경로로 이동
    조건에 맞는 경우에만 전달되 children을 보여줌
     
     */
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center text-3xl font-bold">
        Loading....
      </div>
    );
  }

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
