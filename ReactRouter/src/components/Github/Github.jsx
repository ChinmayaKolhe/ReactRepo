import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
    const data=useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/ChinmayaKolhe")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
  <>
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center">GitHub Profile</h1>
      <div className="flex flex-col items-center space-y-4">
        <img
          src={data.avatar_url}
          alt="Github Avatar"
          className="w-40 h-40 rounded-full border-4 border-white shadow-md"
        />
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p className="text-gray-300 italic">{data.bio}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 text-lg">
        <div className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-md transition">
          <span className="font-medium">Followers:</span> {data.followers}
        </div>
        <div className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-md transition">
          <span className="font-medium">Following:</span> {data.following}
        </div>
        <div className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-md transition">
          <span className="font-medium">Public Repos:</span> {data.public_repos}
        </div>
        <div className="bg-gray-700 p-4 rounded-xl shadow hover:shadow-md transition">
          <span className="font-medium">Profile URL:</span>{" "}
          <a href={data.html_url} target="_blank" className="text-blue-400 underline">
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  </>
);

}

export default Github;


export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/ChinmayaKolhe')
    return response.json()
}