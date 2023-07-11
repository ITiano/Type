import { ArrowUpIcon, ArrowUpsIcon, FlashIcon, LampChargeIcon, SettingIcon } from "@assets/icons/icons";
import ProgressBar from "../../layout/mainLayout/Header/ProgressBar";
import { useAuth } from "src/context/AuthContextProvider";

const ActivityElementsValues = [
  { title: "Current speed", icon: <FlashIcon />, amount: "20 wpm", extraAmount: +13 },
  { title: "Accuracy", icon: <LampChargeIcon />, amount: "20%", extraAmount: -20 },
];

const percentGenerator = (value, total) => Math.ceil((value * 100) / total);

const ProfileActivity = ({ data }) => {
  const [user, setUser] = useAuth();

  const { daily, weekly } = user?.user_metadata;

  const { lastWeek, current, thisWeek } = data || {};

  const charts = [
    { id: 1, width: 6, label: "Last week", value: percentGenerator(lastWeek?.duration, weekly.value), totalLabel: weekly.label },
    { id: 2, width: 9, label: "Today", value: percentGenerator(current?.duration, daily.value), totalLabel: daily.label },
    { id: 3, width: 6, label: "This week", value: percentGenerator(thisWeek?.duration, weekly.value), totalLabel: weekly.label },
  ];

  return (
    <div>
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
      <p className={` flex-start-center ${value.extraAmount > 0 ? "text-green-600" : "text-red-600"}`}>
        {value.extraAmount && (value.extraAmount > 0 ? <ArrowUpIcon /> : <ArrowUpsIcon />)}
        {value.extraAmount}
      </p>
      <p className="font-semibold">{value.amount}</p>
    </div>
  </div>
);
