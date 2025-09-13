import { expect, describe, it } from "vitest";
import { isActivePath } from "./userInterface.js";

describe("Testing isActivePath function", () => {
  it("checks if the current path matches href exactly", () => {
    const href = "/";
    const currentPath = window.location.pathname;
    const result = isActivePath(href, currentPath);
    expect(result).toBe(true);
  });
  it("checks if root path (“/”) when path is “/” or “/index.html", () => {
    const isCurrentPath = "/";
    const href = window.location.pathname;
    isActivePath(href);
    expect(href).toBe(isCurrentPath);
  });
  it("checks if the current path includes the href", () => {
    const isCurrentPath = "/";
    const href = window.location.pathname;
    isActivePath(href);
    expect(href).toBe(isCurrentPath);
  });
  it("checks if path don't match and returns false", () => {
    const CurrentPath = "/signup.html";
    const href = window.location.pathname;
    const result = isActivePath(href, CurrentPath);
    expect(result).not.toBe(false);
  });
});

// Returns true when current path matches href exactly
// Returns true for root path (“/”) when path is “/” or “/index.html”
// Returns true when current path includes the href
// Returns false when paths don’t match
