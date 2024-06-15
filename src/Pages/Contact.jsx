import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="pb-20 pt-10 h-screen bg-main flex flex-col font-outfit">
        <div className="flex flex-col gap-y-4 items-center">
            <h1 className="six-title text-center font-semibold text-main">
                Let's book a call
                <span className="block opacity-70">
                    And make your dreams come true.
                </span>
            </h1>
            <p className="w-5/6 sm:w-2/3 lg:w-1/2 text-xl text-center font-light leading-9 mb-4">
                Let's make your business dreams come true. If a meeting time below does not work for you, 
                reach out to us and we'll setup a call at anytime that works for you.
            </p>
        </div>
        <Cal
        calLink="pranavkonjeti/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
        />
    </div>
  );
}
