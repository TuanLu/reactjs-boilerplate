import React, {useEffect, useState} from 'react';
import API from 'src/api/';
import './index.scss';

export default function Text() {
  const [campaign, setCampaign] = useState([]);
  useEffect(() => {
    const loadUser = async () => {
      const {data: campaigns = {}} = await API.get('/campaign');
      const {data: users = {}} = await API.get('/user');
      console.log('user data', users);
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
