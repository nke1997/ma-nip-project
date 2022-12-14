import React, { useState, useEffect } from "react";
import MyPlants from "./MyPlants";

function MyPlantPage({ userId }) {
    console.log(userId);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (userId !== "") {
      fetch(`http://localhost:3002/favorites`)
        .then((res) => res.json())
        .then((res) => setFavorites(res));
    }
  }, []);

  let favoritesFilter = favorites.filter((favorite) => {
    if (favorite.userId === userId) {
        return favorite;
    }
  });

  let filteredPlants = favoritesFilter.map((favorite) => {
    return favorite.plant;
  });

  return <MyPlants myPlants={filteredPlants} userId={userId} />
}

export default MyPlantPage;
