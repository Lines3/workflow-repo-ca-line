import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("Testing isActivePath function", () => {
  it("checks if the current path matches href exactly", () => {
    const href = "/";
    const currentPath = href;
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });
  it("checks if root path (“/”) when path is “/” or “/index.html", () => {
    const rootPath = "/";
    const href = "/";
    const index = "/index.html";
    expect(isActivePath(rootPath, href)).toBe(true);
    expect(isActivePath(rootPath, index)).toBe(true);
  });
  it("checks if the current path includes the href", () => {
    const currentPath = "/signup.html";
    const href = "/signup.html";
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });
  it("checks if path don't match and returns false", () => {
    const CurrentPath = "/signup.html";
    const href = "/";
    const result = isActivePath(href, CurrentPath);
    expect(result).toBe(false);
  });
});
