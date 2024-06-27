import buildMetadata from "@/components/composition/build-metadata";
import Composition from "@/components/composition/composition";
import PageInfo from "@/definitions/PageInfo";


function buildPageInfo():PageInfo{
  return   {
    title: "About",
    description: "description of about"
   };
}

export const metadata = buildMetadata(buildPageInfo());

export default  function Page() : JSX.Element {
  return (<Composition pageInfo={buildPageInfo()} main={<Main />} renderSidebarInAsideElement={true}/>);
}

function Main() : JSX.Element {


  return (
    <>
      <h1>About</h1>

This is a simplified version of 
<a href="https://www.htmlwasher.com/">https://www.htmlwasher.com/</a> 
just for the purpose of a reproduction of a bug
 </>
      
  );
}
