export * from "./service";
export { default as LocalService } from "./LocalService";

export class Services {
  public static Channel = Symbol("channel");
}
