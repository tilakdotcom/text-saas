export const fifteenMinuteFromNow = () =>
  new Date(Date.now() + 7 * 60 * 60 * 1000);

export const thirtyDaysFromNow = () =>
  new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

export const newDate = (date: string) => new Date(date);

export const Now = () => new Date(Date.now());
