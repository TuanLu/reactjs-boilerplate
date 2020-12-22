import React, {useEffect, useState} from 'react';
import './index.scss';

export default function Text() {
  const [campaign, setCampaign] = useState([]);
  useEffect(() => {
    const loadUser = async () => {
      const user = await fetch('/api/user').then((res) => res.json());
      const {data: campaigns = {}} = await fetch('/api/campaign').then((res) =>
        res.json()
      );
      console.log(campaigns);
      setCampaign(campaigns);
    };
    loadUser();
  }, []);
  return (
    <div className="tech">
      {campaign.map((camp) => (
        <span key={camp.name}>{camp.name}</span>
      ))}
    </div>
  );
}
