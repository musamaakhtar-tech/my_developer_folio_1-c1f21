// netlify/functions/github-profile.js
export const handler = async (event) => {
  const params = new URLSearchParams(event.rawQuery || "");
  const username = params.get("username") || "musamaakhtar-tech";
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return { statusCode: 500, body: JSON.stringify({ error: "Missing GITHUB_TOKEN" }) };
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

    const data = await ghRes.json(); // { data: { user: {...} }, errors?: [...] }

    if (!ghRes.ok || data.errors) {
      return {
        statusCode: ghRes.status || 400,
        body: JSON.stringify({ errors: data.errors || data })
      };
    }

    // Important: match your frontend’s expected shape: { data: { user: ... } }
    return {
      statusCode: 200,
      headers: { "cache-control": "public, max-age=600, s-maxage=600" },
      body: JSON.stringify({ data: data.data })
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: String(e) }) };
  }
};
