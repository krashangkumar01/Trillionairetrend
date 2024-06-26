import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* custom footer start */}
          <div className="mb-12 sm:col-6 lg:col-3">
            {markdownify("Email Us", "h2", "h4")}
            <ul className="mt-6">
              <li className="mb-1">
                <a href="mailto:trillionairetrend01@gmail.com" rel="nofollow, noindex">
                  trillionairetrend01@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-12 sm:col-6 lg:col-3">
            {markdownify("Contact Us", "h2", "h4")}
            <ul className="mt-6">
              <li className="mb-1">
                <a href="callto:+91 8826115308" rel="nofollow, noindex">
                  +91 8826115308
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-12 sm:col-6 lg:col-3">
            {markdownify("Address", "h2", "h4")}
            <ul className="mt-6">
              <li className="mb-1">
                Mayur Vihar Phase 1,
              </li>
              <li>
                New delhi - 110091
              </li>
            </ul>
          </div>
          {/* custom footer end */}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
