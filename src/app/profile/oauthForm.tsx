"use client"

import { Provider } from "@supabase/supabase-js";
import { supabase } from "../../../lib/supabase";
import { redirect } from "next/navigation";

export default function OAuthForm() {
  async function open() {
    const { data } = await supabase.auth.getUser();

    if (data.user) {
        return redirect("/profile");
    }
  }
  open();

  async function handleOAuth(provider: Provider) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider
    });
    
    if (error) {
      window.alert(error); //betterify
    }
  }
  return (
    <div className="px-6 items-center justify-center flex-col flex">
      <h1 className="text-white text-5xl font-bold text-center mt-6">OAuth</h1>

      <button className="text-white bg-sky-600 rounded-lg text-xl px-2 py-1 mt-5 font-semibold w-[300px] hover:bg-sky-800 active:bg-sky-950"
        onClick={() => handleOAuth("discord")}>
          <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" className="inline">
            <path fill="currentColor" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"></path>
          </svg>
        &nbsp;Discord
      </button>

      <button className="text-white bg-sky-600 rounded-lg text-xl px-2 py-1 mt-2 font-semibold w-[300px] hover:bg-sky-800 active:bg-sky-950"
        onClick={() => handleOAuth("github")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="inline">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        &nbsp;Github
      </button>
    </div>
  );
}