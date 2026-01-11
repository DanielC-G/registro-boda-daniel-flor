export function initCalendarDownload() {
  const calendarBtn = document.getElementById('addToCalendar');

  const calendarEvent = {
    title: 'Boda de Daniel & Flor',
    description: 'Ceremonia y recepción — Confirmación únicamente en el registro.',
    location: 'Coatepec / Xico, Veracruz',
    start: '20260530T120000',
    end: '20260530T150000'
  };

  function buildICS({ title, description, location, start, end }) {
    return [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//DanielFlor//Invitacion//ES',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${start}-${Math.random().toString(36).slice(2)}@daniel-flor`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');
  }

  calendarBtn.addEventListener('click', () => {
    const data = buildICS(calendarEvent);
    const blob = new Blob([data], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'boda-daniel-flor.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}
