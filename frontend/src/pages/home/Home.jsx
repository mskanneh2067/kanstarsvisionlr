import { useState, useEffect } from "react";
import CookieConsent from "../../components/cookieConsent/CookieConsent";
import Landing from "../../components/landing/Landing";

const Home = () => {
  const [cookie, setCookie] = useState(false);

  const cookieOpenHandler = () => {
    const cookieName = getCookie("cookiePolicy");
    if (cookieName !== "") {
      //If cookie is present: Dont show cookie banner
      setCookie(false);
    } else {
      setCookie(true);
    }
  };

  const getCookie = (cookieName) => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let total = decodedCookie.split(";");
    for (let i = 0; i < total.length; i++) {
      let cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
    return "";
  };

  const cookieCloseHandler = () => {
    setCookie(false);
  };

  const handleCookieAccepted = () => {
    const expiry = new Date();
    //let us save the cookie for 1 month
    expiry.setTime(expiry.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + expiry.toUTCString();
    document.cookie = "cookiePolicy=accepted;" + expires;
    setCookie(false);
  };
  const handleCookieDeclined = () => {
    setCookie(false);
    //let us save the cookie for the current session only
    //use the default expiry : session
    document.cookie = "cookiePolicy=declined";
  };
  return (
    <>
      <Landing />

      {/* <CookieConsent /> */}
    </>
  );
};

export default Home;
