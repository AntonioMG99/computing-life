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
    note.textContent = "Sign up through our mailing-list service for future events and Computing Life news. You can unsubscribe using the link in each email.";
  } catch {
    console.warn("Mailing-list signup URL must be a valid HTTPS address.");
  }
})();
