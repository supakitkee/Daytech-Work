import React from "react";

interface CardListProps {
  data:{ 
    id: number; // [{1,"sdsad"}, {...}]
    // list: {
      name: string;
      weather: string;
      description: string;
      icon: string;
      date: string;
    // }
    temp: string;
  }[];
}

const DisplayWeather: React.FC<CardListProps>= ({data}) => {

  return (
    <div className="mt-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {data.map(
        (list, index) => {
         
          return (
            <section key={index}>
              <div className="md:flex mt-2">
              <div className="p-8">
                  <div className="block mt-1 text-lg leading-tight font-medium text-black ">
                    <h1>{list.name}</h1>
                  </div>
                <div className="md:flex-shrink-0">
                  <img
                    className="h-20 w-full object-cover md:w-20 items-center"
                    src={list.icon}
                  />
                </div>
                
                  <div className="uppercase mt-2 tracking-wide text-sm text-indigo-500 font-semibold">
                    {list.weather} - {list.description}
                  </div>
                  <p className="mt-2 text-gray-1000">{parseInt(list.temp)-273} °C</p>
                  {/* <span className={styles.cardsubtitle}> */}
              As of {new Date().toLocaleTimeString()}
              {/* </span> */}
            <br>
            </br>
            <br>
            </br>
            <span>
              ----------------------------------------------------------------------------
            </span>
                </div>
              </div>
            </section>
          );
        }
        
      )}
    </div>
  );
}
export default DisplayWeather;
