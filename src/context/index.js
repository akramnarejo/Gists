// creating a application state to avoid props drilling.
import React, { useContext, createContext, useState, useEffect } from "react";
import { getPublicGists, getGistForUser } from "../services/gistService";

const AppState = createContext({
  gists: [],
  error: "",
  loading: false,
});

export const AppStateProvider = ({ children }) => {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPublicGists = () => {
    setLoading(true);
    try {
      getPublicGists()
        .then((data) => {
          setLoading(false);
          setGists(data?.data);
        })
        .catch((error) => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
    }
  };
  const fetchGistsForUser = (username) => {
    setLoading(true);
    try {
      getGistForUser(username)
        .then((data) => {
          setLoading(false);
          if (data?.data?.length === 0) {
            setError("No Gists Found!");
          } else {
            setGists(data?.data);
          }
        })
        .catch((error) => {
          setLoading(false);
          if (error.message === "Not Found") {
            setError("No Gists Found!");
          } else {
            setError(error.message);
          }
        });
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicGists();
  }, []);

  return (
    <AppState.Provider
      value={{
        gists,
        error,
        loading,
        fetchGistsForUser,
        fetchPublicGists,
        setError,
      }}
    >
      {children}
    </AppState.Provider>
  );
};

export const useAppState = () => useContext(AppState);
