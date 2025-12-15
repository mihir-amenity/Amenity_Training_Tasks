import React, { useEffect, useState } from 'react';

function CookieReader() {
  const [allCookies, setAllCookies] = useState({});

  useEffect(() => {
    const cookiesString = document.cookie;
    console.log(cookiesString);
    
    const cookiesArray = cookiesString.split('; ');
    const parsedCookies = {};

    cookiesArray.forEach(cookie => {
      const [name, value] = cookie.split('=');
      parsedCookies[name] = value;
    });

    setAllCookies(parsedCookies);
  }, []);

  return (
    <div>
      <h2>All Cookies:</h2>
      <pre>{JSON.stringify(allCookies, null, 2)}</pre>
    </div>
  );
}

export default CookieReader;