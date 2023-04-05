import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import multiLang from "../MultiLang";

export const LangContext = React.createContext({});

export const LangProvider = (props) => {
  const [openMenuLang, setOpenMenuLang] = useState(false);
  const [lang, setLang] = useState(process.env.NEXT_PUBLIC_REACT_APP_LANGUAGE);
  const [filterLang, setFilterLang] = useState(false);
  const [routeTranslations, setRouteTranslations] = useState(false);
  const [generalComponentsTranslation, setGeneralComponentsTranslation] =
    useState(false);

  const router = useRouter();

  useEffect(() => {
    const localLanguage = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_language`
    );
    if (localLanguage !== undefined && localLanguage !== null) {
      setLang(localLanguage);
      const filterLanguage = multiLang.filter(
        (lang) => lang.language === localLanguage
      );
      if (filterLanguage.length > 0) {
        setFilterLang(filterLanguage[0].data);
      }
    } else {
      const filterLanguage = multiLang.filter(
        (lang) => lang.language === process.env.NEXT_PUBLIC_REACT_APP_LANGUAGE
      );
      if (filterLanguage.length > 0) {
        setFilterLang(filterLanguage[0].data);
      }
    }
  }, [lang]);

  useEffect(() => {
    if (filterLang !== false) {
      const filterLabelsFooter =
        filterLang.labels["footer"] !== undefined
          ? filterLang.labels["footer"]
          : false;
      const filterLabelsHeader =
        filterLang.labels["header"] !== undefined
          ? filterLang.labels["header"]
          : false;
      const filterNotificationsFooter =
        filterLang.notifications["footer"] !== undefined
          ? filterLang.notifications["footer"]
          : false;
      const filterNotificationsHeader =
        filterLang.notifications["header"] !== undefined
          ? filterLang.notifications["header"]
          : false;
      setGeneralComponentsTranslation({
        header: {
          labels: filterLabelsHeader,
          notifications: filterNotificationsHeader,
        },
        footer: {
          labels: filterLabelsFooter,
          notifications: filterNotificationsFooter,
        },
      });
    }
  }, [lang, filterLang]);

  useEffect(() => {
    const routeEdit = router.pathname.includes("search")
      ? "search"
      : router.pathname.includes("category")
      ? "search"
      : router.pathname.includes("seemore")
      ? "search"
      : router.pathname.replace("/profile/", "").replace("/", "");

    if (filterLang !== false) {
      const filterLabels =
        filterLang.labels[routeEdit] !== undefined
          ? filterLang.labels[routeEdit]
          : false;
      const filterNotifications =
        filterLang.notifications[routeEdit] !== undefined
          ? filterLang.notifications[routeEdit]
          : false;

      setRouteTranslations({
        labels: filterLabels,
        notifications: filterNotifications,
      });
    }
  }, [filterLang, router.pathname]);

  return (
    <LangContext.Provider
      value={{
        filterLang,
        openMenuLang,
        setOpenMenuLang,
        lang,
        setLang,
        routeTranslations,
        generalComponentsTranslation,
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};

export const useLang = () => React.useContext(LangContext);
