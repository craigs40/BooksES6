import { DateTime } from 'luxon';

setInterval(() => {
  const dt = DateTime.now();
  document.getElementById("date").textContent = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}, 1000);