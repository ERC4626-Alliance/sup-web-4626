import sup from "./sup.d.ts";

export default sup;

declare module "*.jpg" {
  export default "" as string;
}
declare module "*.svg" {
  export default "" as string;
}
declare module "*.webp" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}
