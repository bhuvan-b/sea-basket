import React from "react";
import Db from "../Firebase";
import { useState, useEffect } from "react";

const CategorySection = () => {
  const ref = Db.collection("categories");

  const [data, setdata] = useState([]);

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setdata(items);
    });
  }
  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  return (
    <div>
      <div className="font-Roboto font-medium text-2xl py-12">CATEGORIES</div>
      <div className="flex justify-between space-x-4">
        {data.map((item) => {
          return (
            <a href="">
              <div className="border flex flex-col justify-center items-center border-2 p-4 bg-white shadow-md  rounded-3xl">
                <div>
                  <img src={item.imgpath} alt="" srcset="" />
                </div>
                <div className="font-Roboto font-medium text-center pt-4">
                  {item.name}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
