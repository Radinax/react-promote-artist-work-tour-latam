import React, { useState, useEffect } from 'react';

const titleCase = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// I WILL KEEP THIS CODE UNTIL I'M 100% SURE THE CHATBOX ISN'T GOING, I HAVE MY DOUBTS STILL.

const Body = () => {
  const [comments, setComments] = useState({});

  const videoId = 'o7N0zMLFUIo';
  const API_KEY = 'AIzaSyDRmOIM1YZOL9v4176O5tRn07u4lTQbk5c';

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const getCommentsData = data.items && data.items.map(item => {
          return {
            user: titleCase(item.snippet.topLevelComment.snippet.authorDisplayName),
            avatar: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
            comments: item.snippet.topLevelComment.snippet.textDisplay,
          }
        })
        return setComments(getCommentsData);
      });
  }, []);

  return (
    <div style={{ height: '500px' }}>Hola</div>
  )
};

export default Body;
