import { Metadata } from "next";

import Main from "./main";
import buildMetadata from "@/components/composition/build-metadata";
import Composition from "@/components/composition/composition";
import PageInfo from "@/definitions/PageInfo";

function buildPageInfo():PageInfo{
  return   {
    pageSetup : {
    title: "HTML Washers’ homepage",
    description: "An online tool that reduces HTML to basic tags and attributes. Removes scripts, CSS, and other non-basic elements like <object>, <canvas>, etc… Also, corrects errors and formats the HTML doc or a fragment."
    }
  };
}

// generateMetadata() woudl use metadata from other pages, similar bug (with parallel routes involved) described at https://github.com/vercel/next.js/issues/49988
export const metadata: Metadata = buildMetadata(buildPageInfo());
export const revalidate = 0;

export default  function Page() : JSX.Element  {
  const pageInfo = buildPageInfo();
  return (<Composition pageInfo={pageInfo} main={<Main />} autoHeight />);
}

