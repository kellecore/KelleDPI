export const DEFAULT_DPI_BLACKLIST = [
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
];

export const DEFAULT_DPI_BLACKLIST_TEXT = DEFAULT_DPI_BLACKLIST.join("\n");

const DOMAIN_PATTERN =
  /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$/;

export function normalizeDpiBlacklistText(value) {
  const seen = new Set();
  const domains = [];

  String(value || "")
    .split(/[\n,\s]+/)
    .map((part) => cleanDomainInput(part))
    .filter(Boolean)
    .forEach((domain) => {
      if (!seen.has(domain)) {
        seen.add(domain);
        domains.push(domain);
      }
    });

  return domains;
}

function cleanDomainInput(value) {
  let domain = String(value || "").trim().toLowerCase();
  if (!domain) return null;
  if (domain.includes("://")) {
    try {
      const url = new URL(domain);
      if (url.protocol !== "http:" && url.protocol !== "https:") return null;
      domain = url.hostname;
    } catch {
      return null;
    }
  }
  domain = domain.replace(/^\*\./, "").replace(/^www\./, "");
  domain = domain.split("/")[0].split(":")[0].replace(/\.$/, "");
  if (!DOMAIN_PATTERN.test(domain)) return null;
  return domain;
}
