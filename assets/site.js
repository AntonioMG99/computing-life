(() => {
  const link = document.getElementById("signup-link");
  const note = document.getElementById("signup-note");
  const configured = window.COMPUTING_LIFE?.mailingListUrl?.trim();
  if (!configured) return;
  try {
    const url = new URL(configured);
    if (url.protocol !== "https:") throw new Error("HTTPS required");
    link.href = url.href;
    link.hidden = false;
    note.textContent = "Sign up for seminar, workshop and community announcements. You can unsubscribe at any time by replying to an announcement.";
  } catch {
    console.warn("Mailing-list signup URL must be a valid HTTPS address.");
  }
})();
