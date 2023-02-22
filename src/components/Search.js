import React, { useCallback } from "react";
import { debounce } from "lodash";
import styled from "styled-components";
import { useAppState } from "../context";

const Search = () => {
  const { fetchGistsForUser, fetchPublicGists, setError } = useAppState();
  // const [username, setUsername] = useState("");

  const handleChange = useCallback(
    // setting debounce hit API after center limit
    debounce((e) => {
      setError(""); // reseting error message to load public gists
      if (e.target.value !== "") {
        // if user has searhed then fetch gists for user else load the public gists
        fetchGistsForUser(e.target.value);
      } else {
        fetchPublicGists();
      }
    }, 500),
    []
  );

  return (
    <Input
      placeholder="Search Gists for the username"
      onChange={handleChange}
    />
  );
};

const Input = styled.input`
  background-color: #0d1111;
  color: white;
  border: 1px solid #30363d;
  border-radius: 5px;
  padding: 6px 8px;
  line-height: 1.5;
  width: 400px;

  font-size: 16px;

  &:focus {
    outline: 1px solid #0265d6;
  }
`;

export default Search;
