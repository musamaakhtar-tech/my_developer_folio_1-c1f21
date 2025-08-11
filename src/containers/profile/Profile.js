import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setProf] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!openSource.showGithubProfile) return;

    const getProfileData = async () => {
      try {
        const res = await fetch("/api/github-profile?username=musamaakhtar-tech", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const user = json?.data?.user;
        if (!user) throw new Error("Malformed profile.json (missing data.user)");
        setProf(user);
      } catch (e) {
        console.error(
          `${e} (GitHub contact section could not be displayed. Falling back to default Contact.)`
        );
        setError(true);
      }
    };

    getProfileData();
  }, []);

  const shouldShowProfile =
    openSource.display &&
    openSource.showGithubProfile &&
    !error &&
    prof &&
    typeof prof !== "string";

  return (
    <Suspense fallback={renderLoader()}>
      {shouldShowProfile ? <GithubProfileCard prof={prof} /> : <Contact />}
    </Suspense>
  );
}
