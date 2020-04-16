// Allows TypeScript to import files produced by the style-loader
declare module '*.scss' {
  export const content: {[className: string]: string};
  export default content;
}
