import { FiUser } from "react-icons/fi";

function UserAvatar() {
  return (
    <div className="flex cursor-pointer items-center gap-2">
      <FiUser size={20} />
      <div className="text-xs">
        <div className="text-gray-500">MY ACCOUNT</div>
        <div className="font-bold">تسجيل الدخول</div>
      </div>
    </div>
  );
}

export default UserAvatar;
