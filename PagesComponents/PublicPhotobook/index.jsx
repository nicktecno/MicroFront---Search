import "react-toastify/dist/ReactToastify.min.css";
import { useCart } from "../../Context/CartLengthContext";
import { useLang } from "../../Context/LangContext";
import { Context } from "../../Context/AuthContext";
import { useContext } from "react";

import api from "../../services/api";
import wishListApi from "../../services/msWishList";

import PublicPhotobookComponent from "./publicPhotobookPage";

const PublicPhotobookPage = () => {
  const { routeTranslations } = useLang();
  const { validaLogin } = useContext(Context);
  const { setCartLength } = useCart();

  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const companyId = process.env.NEXT_PUBLIC_REACT_APP_COMPANY_ID;
  const appUrl = process.env.NEXT_PUBLIC_REACT_APP_URL;
  const appHeaderUrl = process.env.NEXT_PUBLIC_REACT_APP_HEADER_URL;
  const appImagesUrl = process.env.NEXT_PUBLIC_REACT_APP_IMAGES_URL;

  return (
    <>
      <PublicPhotobookComponent
        api={api}
        wishListApi={wishListApi}
        validaLogin={validaLogin}
        routeTranslations={routeTranslations}
        setCartLength={setCartLength}
        mktName={mktName}
        companyId={companyId}
        appUrl={appUrl}
        appHeaderUrl={appHeaderUrl}
        appImagesUrl={appImagesUrl}
      />
    </>
  );
};

export default PublicPhotobookPage;
