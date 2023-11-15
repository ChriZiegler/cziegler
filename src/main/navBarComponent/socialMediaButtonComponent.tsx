import { Icon } from "@mui/material";

export function SocialMediaIcon(props: {
  iconPath: string;
  url: string;
  altText: string;
}) {
  return (
    <>
      <Icon style={{ color: "white" }}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.iconPath} alt={props.altText} />
        </a>
      </Icon>
    </>
  );
}

export function TwitterIcon() {
  return (
    <>
      <SocialMediaIcon
        iconPath="/assets/socialMediaIcons/github.svg"
        url="https://github.com/ChriZiegler"
        altText="Link to github"
      ></SocialMediaIcon>
    </>
  );
}
