import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";
import Link from "next/link";
import { SociaMediaLinkHorizntal } from "./socialmedia";
export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: "translateZ(0)" }}>
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"></svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <div className=" flex flex-row mt-6 lg:mb-0 mb-6">
              <SociaMediaLinkHorizntal />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} | Sara Khaiat
              <br />
              <span> powered by | </span>
              <Link
                href="https://www.levantisk.com/"
                target={"_blank"}
                className="hover:text-blue-500">
                Levantisk AB
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
