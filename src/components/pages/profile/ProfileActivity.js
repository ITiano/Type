import { ArrowUpIcon, ArrowUpsIcon, FlashIcon, LampChargeIcon, SettingIcon } from "@assets/icons/icons";
import ProgressBar from "../../layout/mainLayout/Header/ProgressBar";
import { useAuth } from "src/context/AuthContextProvider";
import { averageGenerator, percentGenerator, twoPercentGenerator } from "@helper/utils";
import { useMemo } from "react";

const ProfileActivity = ({ data }) => {
  const [user] = useAuth();
  const { daily, weekly } = user?.user_metadata;
  const { lastWeek = {}, today = {}, thisWeek = {} } = data || {};

  const ActivityElementsValues = useMemo(() => {
    const thisWeekSpeed = averageGenerator(thisWeek.speed, thisWeek.length);
    const lastWeekSpeed = averageGenerator(lastWeek.speed, lastWeek.length);

    const thisWeekAccuracy = averageGenerator(thisWeek.accuracy, thisWeek.length);
    const lastWeekAccuracy = averageGenerator(lastWeek.accuracy, lastWeek.length);

    return [
      {
        title: "Current speed",
        icon: <FlashIcon />,
        amount: thisWeekSpeed + " wpm ",
        extraAmount: twoPercentGenerator(thisWeekSpeed, lastWeekSpeed),
      },
      {
        title: "Accuracy",
        icon: <LampChargeIcon />,
        amount: thisWeekAccuracy + " % ",
        extraAmount: twoPercentGenerator(thisWeekAccuracy, lastWeekAccuracy),
      },
    ];
  }, [lastWeek.accuracy, lastWeek.length, lastWeek.speed, thisWeek.accuracy, thisWeek.length, thisWeek.speed]);

  const charts = useMemo(
    () => [
      {
        id: 1,
        width: 6,
        label: "Last week",
        value: percentGenerator(lastWeek?.duration, weekly.value),
        totalLabel: weekly.label,
      },
      { id: 2, width: 9, label: "Today", value: percentGenerator(today?.duration, daily.value), totalLabel: daily.label },
      {
        id: 3,
        width: 6,
        label: "This week",
        value: percentGenerator(thisWeek?.duration, weekly.value),
        totalLabel: weekly.label,
      },
    ],
    [daily, weekly, lastWeek?.duration, thisWeek?.duration, today?.duration]
  );

  return (
    <div className="mb-10">
      <div className="flex-between-center">
        <p className="font-semibold text-base">Your Activity</p>
        <SettingIcon />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        {ActivityElementsValues.map((value) => (
          <ActivityElements key={value.title} value={value} />
        ))}
      </div>

      <p className="font-semibold text-base mt-8">Time Spent</p>
      <div className="flex-between-center flex-col md:flex-row gap-x-3 gap-y-10 mt-5 max-w-xl mx-auto">
        {charts.map((item) => {
          return <ProgressBar key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProfileActivity;

const ActivityElements = ({ value }) => (
  <div className="border rounded-lg flex-between-center px-3 py-2">
    <div className="flex-start-center gap-3">
      {value.icon}
      <p className="font-semibold">{value.title}</p>
    </div>
    <div className="flex-start-center gap-3">
      {value.extraAmount !== 0 && (
        <p className={` flex-start-center ${value.extraAmount > 0 ? "text-green-600" : "text-red-600"}`}>
          {value.extraAmount > 0 ? <ArrowUpIcon /> : <ArrowUpsIcon />}
          {value.extraAmount}%
        </p>
      )}
      <p className="font-semibold">{value.amount}</p>
    </div>
  </div>
);
