import { Metadata } from "next";
import PageInfo from "../../definitions/PageInfo";


export default function  buildMetadata(pageInfo: PageInfo): Metadata {





  return {

    metadataBase: new URL("https://www.example.com/"),

    title :pageInfo.title,
    description : pageInfo.description,




   
  };
}


