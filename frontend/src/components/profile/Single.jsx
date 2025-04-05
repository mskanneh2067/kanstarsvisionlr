import { useState } from "react";

const Single = () => {
  const [avatar, setAvatar] = useState(null);

  return (
    <>
      <div className="bg-black w-full h-16"></div>
      <div className="grid grid-cols-1 item place-items-center md:place-items-start md:grid-cols-2 border-b border-black p-3">
        <div>
          <img src={avatar} alt="" className="max-w-16" />
          <input type="file" />
        </div>
        <div className="font-bold text-lg">Mohammed Seyeh Kanneh</div>
      </div>
    </>
  );
};

export default Single;
