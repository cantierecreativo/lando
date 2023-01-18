import ExternalLink from "components/blocks/ExternalLink";
import Icon from "./Icon";

export default function Socials({ locale, site }) {
  const info = site.organization;
  return (
    <>
      <div className="py-4 text-black">Social</div>
      <div className="flex gap-2">
        {info.facebookUrl && (
          <ExternalLink url={info.facebookUrl} className="" title="Facebook">
            <div className="w-9 h-9 bg-black rounded-full relative">
              <Icon
                fill="white"
                name="facebook"
                className="centered"
                size="22"
              />
            </div>
          </ExternalLink>
        )}
        {info.instagramUrl && (
          <ExternalLink url={info.instagramUrl} className="" title="Instagram">
            <div className="w-9 h-9 bg-black rounded-full relative">
              <Icon
                fill="white"
                name="instagram"
                className="centered"
                size="22"
              />
            </div>
          </ExternalLink>
        )}
        {info.twitterUrl && (
          <ExternalLink url={info.twitterUrl} className="" title="Twitter">
            <div className="w-9 h-9 bg-black rounded-full relative">
              <Icon
                fill="white"
                name="twitter"
                className="centered"
                size="22"
              />
            </div>
          </ExternalLink>
        )}
      </div>
    </>
  );
}
