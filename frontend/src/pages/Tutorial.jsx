import React from "react";
import treeImg from "../assets/tree.jpg";
import graphImg from "../assets/graph.jpg";
import dpImg from "../assets/dp.jpg";
import arrayImg from "../assets/array.jpg";
import queueImg from "../assets/queue.jpg"
const tutorials = [
  {
    title: "Array",
    thumbnail: arrayImg,
    link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ"
  },
  {
    title: "Linked List",
    thumbnail: "https://img.youtube.com/vi/5NiXlPrLslg/0.jpg",
    link: "https://www.youtube.com/playlist?list=PLqM7alHXFySF8B9KqOy6yz4vN2B_YAJhJ"
  },
  {
    title: "Stack",
    thumbnail: "https://i.ytimg.com/vi/ZOS1fKa_WUY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAvhIAjCq2E6tFIhIL8atSfEpB1Og",
    link: "https://www.youtube.com/watch?v=ZOS1fKa_WUY&list=PLQEaRBV9gAFtzpMBLVYMh0bPC4Qk_EKbs"
  },
  {
    title: "Queue",
    thumbnail: queueImg,
    link: "https://www.youtube.com/watch?v=tqQ5fTamIN4&list=PLgUwDviBIf0pOd5zvVVSzgpo6BaCpHT9c"
  },
  {
    title: "Tree",
    thumbnail: treeImg,
    link: "https://www.youtube.com/watch?v=_b0bfpO3b4I&list=PLQEaRBV9gAFsIul2ATmw7xP4eaQsjS_Lm"
  },
  {
    title: "Graph",
    thumbnail: graphImg,
    link: "https://www.youtube.com/playlist?list=PLqM7alHXFySGwXaessYMemAnITqlZdZVE"
  },
  {
    title: "Hash Table",
    thumbnail: "https://img.youtube.com/vi/0M_kIqhwbFo/0.jpg",
    link: "https://www.youtube.com/playlist?list=PL9gnSGHSqcnp39cTyB1dTZ2pJ04Xmdrod"
  },
  {
    title: "Dynamic Programming",
    thumbnail: dpImg,
    link: "https://www.youtube.com/watch?v=nqowUJzG-iM&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&pp=0gcJCV8EOCosWNin"
  }
];

export default function Tutorial() {
  return (
    <section className="min-h-screen bg-blue-300 py-10 px-4 rounded-2xl">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
        🎓 DSA Tutorials
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tutorials.map((item, idx) => (
          <div
            key={idx}
            className="border-gray-300 rounded-xl shadow hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-t-xl w-full h-55 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                <strong>{item.title}</strong>
              </h2>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Watch Playlist
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
