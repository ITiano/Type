import React from "react";
import routes from "@routes/routes";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ProfileContainer from "src/app/(user)/profile/components/ProfileContainer";

export const metadata = { title: routes.profile.title };

const withoutTime = (date) => {
  const convert = new Date(date);
  convert.setHours(0, 0, 0, 0);
  return convert;
};

export const dynamic = "force-dynamic";

const Profile = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const initialData = {
    lastWeek: { speed: 0, accuracy: 0, duration: 0, length: 0 },
    thisWeek: { speed: 0, accuracy: 0, duration: 0, length: 0 },
    today: { speed: 0, accuracy: 0, duration: 0, length: 0 },
  };

  const lastWeek = new Date();
  const thisWeek = new Date();
  const Today = new Date();
  const TodayDayOfWeek = Today.getDay() + 2;
  lastWeek.setDate(Today.getDate() - 7 - TodayDayOfWeek);
  thisWeek.setDate(Today.getDate() - TodayDayOfWeek);

  lastWeek.setHours(0, 0, 0, 0);
  thisWeek.setHours(0, 0, 0, 0);
  Today.setHours(0, 0, 0, 0);

  const { data = [], error } = await supabase.from("histories").select();

  if (error) throw new Error(error.message);

  const convertData = data.reduce((previous, current) => {
    const courseDate = withoutTime(current.created_at).getTime();

    if (courseDate >= lastWeek.getTime() && courseDate < thisWeek.getTime()) {
      previous.lastWeek.speed += current.speed;
      previous.lastWeek.accuracy += current.accuracy;
      previous.lastWeek.duration += current.duration;
      previous.lastWeek.length += 1;
    }

    if (courseDate >= thisWeek.getTime() && courseDate <= Today.getTime()) {
      previous.thisWeek.speed += current.speed;
      previous.thisWeek.accuracy += current.accuracy;
      previous.thisWeek.duration += current.duration;
      previous.thisWeek.length += 1;
    }

    if (courseDate === Today.getTime()) {
      previous.today.speed += current.speed;
      previous.today.accuracy += current.accuracy;
      previous.today.duration += current.duration;
      previous.today.length += 1;
    }

    return previous;
  }, initialData);

  return <ProfileContainer data={convertData} />;
};

export default Profile;
