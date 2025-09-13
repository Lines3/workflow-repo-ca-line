import { expect, describe, it, beforeEach } from "vitest";
import { saveUser, getUsername } from "./storage";

describe("Username storage functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("saveUser", () => {
    it("saves the username to storage", () => {
      const testUsername = "Marie";
      saveUser(testUsername);
      expect(localStorage.getItem("user")).toBe(JSON.stringify(testUsername));
    });
  });

  describe("getUsername", () => {
    it("retrieves the username from storage", () => {
      localStorage.setItem("user", JSON.stringify({ name: "Marie" }));
      const retrievedUsername = getUsername();
      expect(retrievedUsername).toBe("Marie");
    });

    it("returns null when no username exists", () => {
      const username = getUsername();
      expect(username).toBeNull();
    });
  });
});
