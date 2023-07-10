import { ArrowUpIcon, ArrowUpsIcon, FlashIcon, KeyboardIcon, LampChargeIcon, SettingIcon } from "@assets/icons/icons";
import ProgressBar from "../../layout/mainLayout/Header/ProgressBar";

const ProfileActivity = () => {
  const ActivityElementsValues = [
    { title: "Current speed", icon: <FlashIcon />, amount: "20 wpm", extraAmount: undefined },
    { title: "Keyboard Coverage", icon: <KeyboardIcon />, amount: "20%", extraAmount: +13 },
    { title: "Accuracy", icon: <LampChargeIcon />, amount: "20%", extraAmount: -20 },
  ];

  const data = [
    { id: 1, width: 6, label: "Last week", value: 66, totalLabel: "of 3 hours" },
    { id: 2, width: 9, label: "Today", value: 66, totalLabel: "of 3 hours" },
    { id: 3, width: 6, label: "This week", value: 66, totalLabel: "of 3 hours" },
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
        {data.map((item) => {
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
