# Public export review

Prepared 1 November 2026.

This package was assembled from an explicit small set of reviewed modules plus newly authored demonstration code. It was not copied from the private export wholesale.

Included: public professional name and brand; two generic production modules; fictional metrics, prospects, tasks and content; new abstract illustrations; screenshot of the fictional demo; documentation and tests.

Excluded: production data and database exports, scheduled campaign snapshots, customer records, personal contact details, photographs, provider credentials, runtime secrets, account IDs, source repository history and live project configuration.

The build has no runtime package dependencies or external font/image imports. Browser state stays in localStorage under a demo-specific key. No information is submitted anywhere by this app. Hosting providers may keep their own access logs if the demo is published.

A pattern scan checked for credentials, private contact information, production identifiers and external runtime requests. Pattern scans are not a guarantee against every possible secret; the primary safeguard here is the explicit file selection and newly written demo data.

Do not replace the fixtures with real customer or campaign information when maintaining a public copy.
