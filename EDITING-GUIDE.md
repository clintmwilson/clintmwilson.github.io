# Editing your portfolio

Everything you'll ever change lives in **`content.js`**. You never need to touch `index.html`.

## Edit text (bio, major, descriptions)
1. On github.com, open your `clintmwilson.github.io` repo and click `content.js`.
2. Click the pencil icon (top right of the file).
3. Change the words between the quotes. Keep the quotes and the comma at the end of the line.
4. Click **Commit changes**. The live site updates in 1–2 minutes.

Changing majors? Edit the `headline` and `bio` lines at the top.

## Add or replace photos
1. Open the `images` folder in the repo, click **Add file → Upload files**, and drag your photos in.
2. In `content.js`, add a line in that project's `media` list:
   `{ image: "images/YOUR-FILE.jpg", caption: "What this photo shows" },`
3. The file name must match exactly, including capitals and `.jpg` vs `.JPG`.

A photo slot showing "Photo goes here" means the file name in `content.js` doesn't match an uploaded file.

## Add a video
Upload it to YouTube (Unlisted is fine), then use:
`{ youtube: "https://youtu.be/XXXXXXXXXXX", caption: "Hover test" },`

## Add a project
Copy a whole project block, from its `{` to its matching `},`, paste it after the last project in that section, and change the details.

## Add next year's drone
In the Vertical Flight Society section, copy the `2025–2026 Drone` block and paste it directly **above** it (so the newest is first). Update the title, year, role and photos.

## Something broke?
If the page shows a message about a typo, the last edit is usually missing a comma, quote or bracket. Open the file's **History** on GitHub to see or undo your last change.
