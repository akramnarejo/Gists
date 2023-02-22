import styled from "styled-components";
import Octicon from "react-octicon";

const formatDate = (val) => {
  // format date to dd/mm/yyyy
  const date = new Date(val);
  return `${date?.getDate()}/${date?.getMonth() + 1}/${date?.getFullYear()}`;
};
const Gist = ({ gist }) => {
  const files = gist && Object.keys(gist?.files);
  return (
    <Wrapper>
      <Heading>
        <User>
          <UserImg
            src={
              gist?.owner?.avatar_url ??
              "https://avatars.githubusercontent.com/u/12760108?v=4"
            }
            alt="user-img"
          />
          <p>
            <a href={gist?.owner?.html_url} target="_blank" rel="noreferrer">
              {gist?.owner?.login}
            </a>
          </p>
        </User>
        <ContributionList>
          <Contribution>
            <FilesIcon>
              <Octicon name="chevron-left" style={{ width: 8 }} />
              <Octicon
                name="chevron-right"
                style={{
                  width: 8,
                }}
              />
            </FilesIcon>
            <p> {files?.length} Files</p>
          </Contribution>
          <Contribution>
            <svg
              fill="#0265D6"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
            >
              <path
                fillRule="evenodd"
                d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
              />
            </svg>

            <p>Forks</p>
          </Contribution>
          <Contribution>
            <Octicon name="comment" />
            <p>Comments {gist?.comments ? gist.comments : null}</p>
          </Contribution>
          <Contribution>
            <Octicon name="star" />
            <p>Stars</p>
          </Contribution>
        </ContributionList>
      </Heading>
      <Dates>
        <DatesText>Created at: {formatDate(gist?.created_at)}</DatesText>
        <DatesText>Last updated: {formatDate(gist?.updated_at)}</DatesText>
      </Dates>
      <GistDescription>
        <GistDescriptionText>{gist?.description}</GistDescriptionText>
      </GistDescription>
      <Files>
        {files
          ? files?.map((file, index) => {
              return (
                <File key={index}>
                  <Octicon name="file" />
                  <FileName>
                    <a
                      href={gist?.files[`${file}`]?.raw_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {file}
                    </a>
                  </FileName>
                </File>
              );
            })
          : null}
      </Files>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eef0f1;
`;
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
const ContributionList = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 500px;
`;
const Contribution = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const FilesIcon = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
`;
const Dates = styled.div`
  display: flex;
  gap: 20px;
`;
const DatesText = styled.div`
  color: #646667;
  font-size: 14px;
`;
const GistDescription = styled.div``;
const GistDescriptionText = styled.p`
  font-size: 20px;
  color: #626465;
  margin-bottom: 0;
`;
const Files = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 20px;
`;
const File = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
  cursor: pointer;
`;
const FileName = styled.p`
  margin: 0;
`;

export default Gist;
