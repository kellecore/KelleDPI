import test from "node:test";
import assert from "node:assert/strict";
import {
  DEFAULT_DPI_BLACKLIST,
  DEFAULT_DPI_BLACKLIST_TEXT,
  normalizeDpiBlacklistText,
} from "./dpiBlacklist.js";

test("normalizes custom DPI blacklist text into unique domains", () => {
  const input = `
    https://discord.com/channels/test
    discord.gg
    *.roblox.com
    http://www.wattpad.com/story
    amazonaws.com, rbxcdn.com
    bad domain
    ftp://ignored.example
    discord.com
  `;

  assert.deepEqual(normalizeDpiBlacklistText(input), [
    "discord.com",
    "discord.gg",
    "roblox.com",
    "wattpad.com",
    "amazonaws.com",
    "rbxcdn.com",
  ]);
});

test("ships the requested default DPI blacklist domains", () => {
  assert.deepEqual(DEFAULT_DPI_BLACKLIST, [
    "discord.gg",
    "discord.com",
    "discordapp.com",
    "roblox.com",
    "arkoselabs.com",
    "rbxcdn.com",
    "rbxinfra.net",
    "rbxtrk.com",
    "amazonaws.com",
    "wattpad.com",
  ]);
  assert.equal(DEFAULT_DPI_BLACKLIST_TEXT, DEFAULT_DPI_BLACKLIST.join("\n"));
});
