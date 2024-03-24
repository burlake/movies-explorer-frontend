import "./Main.css";
import Error from "../Error - 404/Error";
import { headphones, wirelessHeadphones, savedHeadphones } from "../../utils/constants";
import { useEffect, useState } from "react";
import Headphones from "../Headphones/Headphones";
import WirelessHeadphones from "../WirelessHeadphones/WirelessHeadphones";
import Basket from "../Basket/Basket";

function Main({ name, setLoggedIn }) {
  const [headphonesAll, setHeadphonesAll] = useState([]);
  const [wirelessHeadphonesAll, setWirelessHeadphonesAll] = useState([]);
  const [saveHeadphones, setSaveHeadphones] = useState([]);
  const [isCheckHeadphonesAll, setIsCheckHeadphonesAll] = useState(true);
  const [isCheckHeadphonesSave, setIsCheckHeadphonesSave] = useState(true);

  useEffect(() => {
    setHeadphonesAll(headphones);
    setWirelessHeadphonesAll(wirelessHeadphones);
    setSaveHeadphones(savedHeadphones);
  }, []);

  function onCheckHeadphonesAll() {
    if (isCheckHeadphonesAll) {
      setIsCheckHeadphonesAll(false);

      setHeadphonesAll(headphonesAll.filter((element) => element.price <= 40));
    } else {
      setIsCheckHeadphonesAll(true);
      setHeadphonesAll(headphones);
    }
  }

  return (
    <main className="main">
      {
        {
          error: <Error />,
          homepage: (
            <>
              <Headphones headphones={headphonesAll} />
              <WirelessHeadphones wirelessHeadphones={wirelessHeadphonesAll} />
            </>
          ),
          savedmovies: (
            <>
              {/* <Headphones headphones={saveHeadphones} /> */}
              <Basket headphones={saveHeadphones} />
            </>
          ),
        }[name]
      }
    </main>
  );
}

export default Main;
