import { DateTime } from 'luxon';

setInterval(() => {
  const dt = DateTime.now();
  divDate.textContent = dt.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
}, 1000);