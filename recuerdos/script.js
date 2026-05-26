const GOOGLE_PHOTOS_ALBUM_URL = "https://photos.app.goo.gl/a94B41FsT4v5t8Q17";
const WHATSAPP_FALLBACK_URL = "https://wa.me/";

const uploadBtn = document.getElementById("uploadBtn");
const fallbackBtn = document.getElementById("fallbackBtn");
const fallbackMsg = document.getElementById("fallbackMsg");

if (uploadBtn) {
  uploadBtn.href = GOOGLE_PHOTOS_ALBUM_URL;
}

if (fallbackBtn) {
  fallbackBtn.addEventListener("click", () => {
    if (WHATSAPP_FALLBACK_URL && WHATSAPP_FALLBACK_URL !== "https://wa.me/") {
      window.open(WHATSAPP_FALLBACK_URL, "_blank", "noopener,noreferrer");
      return;
    }

    if (fallbackMsg) {
      fallbackMsg.hidden = false;
    }
  });
}
