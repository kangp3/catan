// Allows TypeScript to import JS modules produced by the css-loader
//
// Since the style-loader then moves these styles inline, there's no need to
// define types beyond allowing TypeScript to resolve *.scss files
declare module '*.scss';
