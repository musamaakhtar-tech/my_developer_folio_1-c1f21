// api/github-profile.js
export default async function handler(req, res) {
  const { username = "musamaakhtar-tech" } = req.query;
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "Missing GITHUB_TOKEN server env var" });
  }

  const query = `
    query ($login: String!) {
      user(login: $login) {
        id
        login
        name
        bio
        avatarUrl
        location
        url
      }
    }
  `;

  try {
    const ghRes = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "User-Agent": "my-developer-folio"
      },
      body: JSON.stringify({ query, variables: { login: username } })
    });

    const data = await ghRes.json();
    if (!ghRes.ok || data.errors) {
      return res.status(ghRes.status || 400).json({ errors: data.errors || data });
    }

    // Match your old /profile.json shape for a drop-in replacement:
    // { data: { user: {...} } }
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=86400");
    return res.status(200).json({ data });
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
