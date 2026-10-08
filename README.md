# Computing Life — GitHub Pages website

Standalone HTML, CSS and JavaScript. No installation, build system, database or ChatGPT subscription is needed to run these files.

## Publish from GitHub (recommended)

1. Create a public GitHub repository named computing-life under your account or a group organisation. An organisation lets the organisers share maintenance.
2. Extract this ZIP on your computer.
3. Choose Add file → Upload files in the repository. Upload the CONTENTS of the extracted folder, including assets. index.html must be at the repository root, not inside another folder. Commit to main.
4. Open Settings → Pages. Under Build and deployment, select Deploy from a branch, then main and /(root). Click Save.
5. Wait for deployment. Settings → Pages shows the URL, usually https://YOUR-USERNAME.github.io/computing-life/.

All asset paths are relative, so this works for a project site, an organisation root site or a custom domain. The included .nojekyll file bypasses Jekyll. Browser upload also works if your file manager hides it: there are no underscore folders or Jekyll template syntax.

## Optional terminal upload

Create an empty public repository first. Run in this extracted folder:

    git init
    git add .
    git commit -m "Add Computing Life website"
    git branch -M main
    git remote add origin https://github.com/YOUR-USERNAME/computing-life.git
    git push -u origin main

Then select main / /(root) in Settings → Pages.

## Mailing list: setup still needed

GitHub Pages cannot run the original database-backed signup endpoints. This edition links to an external mailing-list service's hosted signup page. That service manages subscribers, consent, unsubscribe and newsletter delivery.

1. Create your mailing list with your preferred provider.
2. Obtain its public hosted signup-page URL.
3. Edit site-config.js and paste that HTTPS URL into mailingListUrl.
4. Commit the change. The signup button automatically appears when a valid URL is configured.
5. Test registration and unsubscribe with your own email through the provider.

Until configured, the page says signup will open soon. It does not collect addresses or report successful registrations.

Never put subscriber lists, passwords or API keys in this repository. Only the public signup URL belongs in site-config.js. Existing registrations from the original hosted site are not migrated; export/import them separately if needed, preserving consent records.

## Editing

- index.html: page text, navigation, organiser bios and institutional links.
- assets/styles.css: colours, typography and responsive layouts.
- site-config.js: public signup URL.
- assets/people/: local portraits of Michael and Ruben from their institutional pages.
- assets/site.js: signup-link configuration logic.

On GitHub, open a file, click the pencil icon, edit and commit. Pages republishes changes to main.

Antonio and Dadi use initials for now. To add a portrait, upload a suitable image and replace the corresponding initials div in index.html with:

    <img class="portrait" src="assets/people/antonio.jpg" alt="Antonio Matas Gil" loading="lazy">

Use photos you have permission to publish. No open-source licence is applied to third-party portraits or the group identity.

## Local preview

Run from this folder:

    python3 -m http.server 8000

Open http://localhost:8000. Stop with Ctrl+C. GitHub hosts the published website independently of your computer.

## Custom domain (optional)

Buy or use a domain you own. Configure it in Settings → Pages and follow GitHub's DNS instructions. Enable HTTPS when available. No domain is preconfigured here.

## Package scope

This package has no ChatGPT account settings, credentials, hosting identifiers, subscriber data or server endpoints. No GitHub repository or external mailing-list account has been created. Upload these files to your own account. The existing private Computing Life site remains separate and unchanged.

## Official documentation

- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
