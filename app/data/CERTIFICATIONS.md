# Certification data

The 25 Coursera records were read from the signed-in Certificates & Badges collection on October 13, 2026 (23 courses, 2 specialization/professional credentials). Every individual credential page was inspected for original preview URLs, dates, skills, course links and specialization membership.

- `certifications.js`: original titles, issuers, verification links and featured selection.
- `certification-details.json`: metadata keyed by original credential ID. Descriptions paraphrase official Coursera learning outcomes; application paragraphs are editorial suggestions, not personal experience claims. The Introduction to Docker, Plan a Successful Freelancing Business and Instructional Design overviews were sourced from their linked official course pages.
- `additional-certifications.json`: add credentials from other platforms here. Include a unique `id`, stable `slug`, `platform`, `title`, `issuer`, `url` (official verification), `type`, and any available `imageUrl`, `completionDate`, `description`, `skills`, `application`, `childIds` or `relatedProjects`. Never fabricate missing fields.

The import is a saved snapshot, not a live synchronization service. The Coursera connector does not expose personal credential export; browser access was used. No authentication cookies or credentials are stored. Images remain at their original Coursera URLs. If unavailable, the UI supplies a readable fallback and retains navigation to the credential.

To refresh, inspect the authenticated Coursera Certificates & Badges list, reconcile IDs, and update metadata only from official course/credential pages. Child IDs represent confirmed earned constituent certificates, not inferred course membership. Static detail routes regenerate on the next build. Choose up to four featured IDs in `certifications.js`; the remainder appear under View All.
