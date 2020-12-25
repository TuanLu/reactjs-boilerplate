import React, { memo, useEffect, useState } from "react";
import API from "src/api";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    const loadRanking = async () => {
      const { data: rankingList } = await API.get("/ranking");
      setRanking(rankingList);
    };
    if (!ranking.length) {
      loadRanking();
    }
  }, [ranking, setRanking]);
  return (
    <div className="cp-ranking">
      <ul>
        {ranking.map((rankItem) => (
          <li key={rankItem.email}>
            <h4>{rankItem.email}</h4>
            <p>{rankItem.prize_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Ranking);
