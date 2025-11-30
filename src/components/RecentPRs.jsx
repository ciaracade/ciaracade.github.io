"use client";

import { useEffect, useState } from "react";

export function RecentPRs({ username = "ciaracade", limit = 5 }) {
  const [prs, setPRs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPRs() {
      try {
        const response = await fetch(
          `https://api.github.com/search/issues?q=author:${username}+type:pr&sort=created&order=desc&per_page=${limit}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch PRs");
        }

        const data = await response.json();

        const prData = data.items.map((pr) => ({
          title: pr.title,
          url: pr.html_url,
          repository: pr.repository_url.split("/").slice(-2).join("/"),
          state: pr.pull_request?.merged_at
            ? "Merged"
            : pr.state === "open"
              ? "Open"
              : "Closed",
          createdAt: pr.created_at,
        }));

        setPRs(prData);
      } catch (error) {
        console.error("Error fetching PRs:", error);
        setPRs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPRs();
  }, [username, limit]);

  if (loading) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-500">Loading recent PRs...</p>
      </div>
    );
  }

  if (prs.length === 0) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-gray-500">No recent PRs found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {prs.map((pr, index) => (
        <div key={index}>
          <a
            href={pr.url}
            className="text-sm font-semibold text-black hover:text-gray-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {pr.title}
          </a>
          <p className="text-xs text-gray-500">
            {pr.repository} •{" "}
            <span
              className={
                pr.state === "Merged"
                  ? "text-purple-600 font-semibold"
                  : pr.state === "Open"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
              }
            >
              {pr.state}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
