import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const TwitterFeed = ({ screenName }) => {
  return (
    <section id="twitter-feed">
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: screenName
        }}
        options={{
          height: '400'
        }}
      />
    </section>
  );
};

export default TwitterFeed;