import { formatDistanceToNowStrict, formatDuration, intervalToDuration } from 'date-fns';

export const DATE_FORMATTER = {
  MMM_d_yyyy: 'MMM d, yyyy',
  HHMM_AA_MMM_d: 'h:mm aa, MMM d',
  HH_MM_SS: 'HH:mm:ss',
  YYYY_MM_dd: 'yyyy MM dd',
  YYYY_MM: 'yyyy.MM',
  MM_dd: 'MM월 dd일',
  E: 'E',
};

export const elapsedTime = (timestamp: number) => {
  const diff = Date.now() - timestamp;
  if (diff < 60000) {
    return 'Just now';
  } else {
    return formatDistanceToNowStrict(timestamp) + ' ago';
  }
};

interface FormatRegexp {
  regexp: RegExp;
  str: string;
}
/**
 * default res example '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 time'
 * getRemainTime(time, now, [{ regexp: / years?/, str: '년' }]) === '2년 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 */
export const getRemainTime = (time: Date, now = new Date(), formatRegexp?: FormatRegexp[]) => {
  if (now.getTime() >= time.getTime()) return 'END';

  const duration = intervalToDuration({ start: now, end: time });
  const formattedDuration = formatDuration(duration);

  let res = formattedDuration;
  formatRegexp?.forEach(({ regexp, str }) => {
    res = res.replace(regexp, str);
  });

  return res;
};

export const formatEmailVerificationRemainTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};
