declare module "*.svg?inline" {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.less" {
  const classes: any;
  export default classes;
}
declare module "*.css" {
  const classes: Record<string, any>;
  export default classes;
}
