import buildMetadata from "@/components/composition/build-metadata";
import Composition from "@/components/composition/composition";
import PageInfo from "@/definitions/PageInfo";




function buildPageInfo():PageInfo{
  return   {
    pageSetup : {
    title: "Help",
    description: "description of help"
    }
   };
}


// generateMetadata() woudl use metadata from other pages, similar bug (with parallel routes involved) described at https://github.com/vercel/next.js/issues/49988
export const metadata = buildMetadata(buildPageInfo());


export default  function Page() : JSX.Element {
  return (<Composition pageInfo={buildPageInfo()} main={<Main />} renderSidebarInAsideElement={true}/>);
}


function Main() : JSX.Element {

  return (
    <>
    <h1>Help</h1>
    This is a simplified version of 
<a href="https://www.htmlwasher.com/">https://www.htmlwasher.com/</a> 
just for the purpose of a reproduction of a bug
        </>
  );
}