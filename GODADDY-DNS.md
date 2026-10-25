# GoDaddy DNS for LeatherWalletManufacturer.com

The production domain is configured as the apex domain: `leatherwalletmanufacturer.com`. GitHub Pages will redirect `www.leatherwalletmanufacturer.com` to the apex domain after both DNS variants are configured.

## Records to remove or replace

The domain currently resolves through these GoDaddy parking records. Remove both when switching traffic to GitHub Pages:

| Type | Name | Current value |
| --- | --- | --- |
| A | `@` | `3.33.130.190` |
| A | `@` | `15.197.148.33` |

Replace the existing `www` CNAME if it points to `@` or `leatherwalletmanufacturer.com`.

Do not remove MX, TXT, verification, DKIM or other email-related records. Do not add a wildcard `*` record.

## Required records

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | 1 hour/default |
| A | `@` | `185.199.109.153` | 1 hour/default |
| A | `@` | `185.199.110.153` | 1 hour/default |
| A | `@` | `185.199.111.153` | 1 hour/default |
| CNAME | `www` | `GITHUB_USERNAME.github.io` | 1 hour/default |

The `www` CNAME must point directly to the GitHub account domain, without the repository name and without `https://` or a trailing path. Replace `GITHUB_USERNAME` after the repository owner is known.

Optional IPv6 records may also be added:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` | 1 hour/default |
| AAAA | `@` | `2606:50c0:8001::153` | 1 hour/default |
| AAAA | `@` | `2606:50c0:8002::153` | 1 hour/default |
| AAAA | `@` | `2606:50c0:8003::153` | 1 hour/default |

## GoDaddy steps

1. Sign in to GoDaddy and open Domain Portfolio.
2. Select `leatherwalletmanufacturer.com`, then open DNS.
3. Delete or edit the two parking A records listed above.
4. Add the four required A records.
5. Edit the `www` CNAME to the GitHub account domain.
6. Save each record and allow DNS time to propagate.
7. In the GitHub repository, open Settings → Pages, confirm the custom domain is `leatherwalletmanufacturer.com`, and enable Enforce HTTPS when GitHub makes it available.

## Verification commands

```bash
dig +short leatherwalletmanufacturer.com A
dig +short www.leatherwalletmanufacturer.com CNAME
```

The apex lookup should return the four `185.199.*.153` addresses. The `www` lookup should return the GitHub account domain. DNS propagation may take up to 24 hours, and HTTPS certificate availability can follow later.
