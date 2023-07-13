import { CheckIcon, LockIcon, PlayIcon } from "@assets/icons/icons";

export const dailyGoalList = [
  { value: 20 * 60, label: "20 min" },
  { value: 30 * 60, label: "30 min" },
  { value: 40 * 60, label: "40 min" },
];

export const weeklyGoalList = [
  { value: 20 * 60, label: "20 min" },
  { value: 30 * 60, label: "30 min" },
  { value: 40 * 60, label: "40 min" },
];

export const CoursesIcons = { 1: <CheckIcon className="text-[#8FE357]" />, 2: <PlayIcon />, 3: <LockIcon /> };

export const courseKinds = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
];

export const percentGenerator = (value, total) => (!value || !total ? 0 : Math.ceil((value * 100) / total));

export const averageGenerator = (value, length) => (!value || !length ? 0 : Math.ceil(value / length));

export const twoPercentGenerator = (newValue, oldValue) =>
  !newValue || !oldValue ? 0 : ((newValue - oldValue) / oldValue) * 100;

export const SecondTimeTranslator = (time = 0) => {
  let minutes = Math.floor(time / 60);
  if (minutes < 10) minutes = `0${minutes}`;
  let second = Math.floor(time % 60);
  if (second < 10) second = `0${second}`;
  return `${minutes}:${second}`;
};
