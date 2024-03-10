import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Suvakshya")
      .then((res) => res.json()) //here the data from the url is being loaded inside of res
      .then((data) => {
        // here data represents the converted data from res.json()
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 p-3 bg-gray-600 text-white text-3xl">
      Github followers:{data.followers}
      <img
        className="text-center"
        src={data.avatar_url}
        alt="Git picture"
        width={300}
      />
    </div>
  );
}

export default Github;
