// https://stackoverflow.com/questions/46503615/import-html-from-typescript-with-webpack

declare module '*.html' {
    const content: string;
    export default content;
  }

  declare module '*.png' {
    // https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts
    const content: import("next/image").StaticImageData;
    export default content;
  }

  declare module '*.svg' {
    const content: import("next/image").StaticImageData;
    export default content;
  }

declare module '*.txt' {
  const content: string;
  export default content;
}

declare module '*.template' {
  const content: string;
  export default content;
}

declare module '*.json.template' {
  const content: string;
  export default content;
}