import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const serverSupabase = createServerComponentClient({ cookies  });

export default serverSupabase;
