import { WEDDING_CONFIG } from '../data/wedding.config.js';

export function bindContentFromConfig() {
  const {
    coupleName,
    kickerText,
    subText,
    distributionNote,
    dateBold,
    datePlace,
    events,
    registryUrl,
    faq
  } = WEDDING_CONFIG;

  const title = document.querySelector('h1');
  if (title) {
    title.textContent = coupleName;
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.textContent = coupleName;
  }

  const kicker = document.querySelector('.kicker');
  if (kicker) {
    kicker.textContent = kickerText;
  }

  const sub = document.querySelector('.sub');
  if (sub) {
    sub.textContent = subText;
  }

  const distribution = document.querySelector('.cardhead .muted');
  if (distribution) {
    distribution.textContent = distributionNote;
  }

  const meta = document.querySelector('.meta');
  if (meta) {
    meta.innerHTML = `<strong>${dateBold}</strong> · ${datePlace}`;
  }

  document.querySelectorAll('.cta-primary, .sticky-rsvp a').forEach((link) => {
    link.setAttribute('href', registryUrl);
  });

  const grid = document.querySelector('.grid');
  if (grid) {
    grid.innerHTML = '';
    events.forEach((event) => {
      const mini = document.createElement('div');
      mini.className = 'mini';

      const label = document.createElement('strong');
      label.textContent = event.label;

      const venue = document.createTextNode(event.venue);
      const lineBreak = document.createElement('br');

      const address = document.createElement('span');
      address.className = 'muted';
      address.textContent = event.address;

      const link = document.createElement('a');
      link.className = 'map-link';
      link.target = '_blank';
      link.rel = 'noopener';
      link.href = event.mapsUrl;
      link.textContent = 'Abrir en Google Maps';

      mini.append(label, venue, lineBreak, address, link);
      grid.appendChild(mini);
    });
  }

  const faqBlock = document.querySelector('.faq');
  if (faqBlock) {
    const heading = faqBlock.querySelector('h4');
    faqBlock.innerHTML = '';
    if (heading) {
      faqBlock.appendChild(heading);
    }

    faq.forEach((item) => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = item.q;

      const paragraph = document.createElement('p');
      paragraph.textContent = item.a;

      details.append(summary, paragraph);
      faqBlock.appendChild(details);
    });
  }
}
