# Deploy to GitHub Pages — 5 minutes

All assets are now included. Auto-deploy is set up via GitHub Actions.

1. Create a new GitHub repo named "agrorithm".
   (Different name? Edit `base` in vite.config.ts to "/<repo-name>/" first.)
2. Push this folder:
     git init && git add -A && git commit -m "initial"
     git branch -M main
     git remote add origin https://github.com/<username>/agrorithm.git
     git push -u origin main
3. Repo Settings → Pages → Source: "GitHub Actions".
4. Wait ~2 min for the Action to finish.
   Live at: https://<username>.github.io/agrorithm/

Custom domain later? Add it in Pages settings and change `base` to "/".

# Still outstanding: the contact form sends nothing

It shows "Message received" but no message goes anywhere. Wire it to
Web3Forms or Formspree (free) before sharing the link with investors.
