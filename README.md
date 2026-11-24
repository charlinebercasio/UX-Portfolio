# Charline Bercasio · UX portfolio

Static site. Everything runs in the browser, so no build step is needed.

## Put it on GitHub Pages
1. Create a new public repo on GitHub, e.g. `portfolio`.
2. On the repo page click **Add file → Upload files**, drag in everything inside this folder (not the folder itself), and commit.
3. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. In about a minute it is live at `https://<your-username>.github.io/portfolio/`.

## Use your own domain
1. In **Settings → Pages → Custom domain**, type your domain (e.g. `www.yourname.com`) and **Save**. GitHub adds a `CNAME` file for you.
2. At your domain registrar, add DNS records:
   - `www` → **CNAME** → `<your-username>.github.io`
   - For the bare domain (`yourname.com`), four **A** records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Wait for DNS to update (minutes to a few hours), then tick **Enforce HTTPS** in Settings → Pages.

## Pages
index.html (home) · about.html · resume.html · contact.html · playpals.html · solenne.html · dewlab.html · meadow.html · sleepmaxx.html · supercharge.html · gamified.html (hidden, not linked)

The `*.dc.html` files are the live prototypes the pages embed. Keep them next to the pages.

## Updating
Keep designing in Claude, then ask for a fresh export and re-upload the changed files.
