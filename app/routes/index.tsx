import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">

              <div className="absolute inset-0 bg-red-200 mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-slate-900 drop-shadow-md">
                  <a href="https://webmail.mail.us-west-2.awsapps.com/workmail/?organization=mckelt">Web Mail</a>
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-slate-700 sm:max-w-3xl">
                https://webmail.mail.us-west-2.awsapps.com/workmail
              </p>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-slate-700 sm:max-w-3xl">
                <a href="http://www.linkedin.com/in/chrismckelt" className="zocial linkedin">Linked In</a>
              </p>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-slate-700 sm:max-w-3xl">
                <a href="http://twitter.com/chris_mckelt" className="zocial twitter">@chris_mckelt</a>
              </p>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-slate-700 sm:max-w-3xl">
                <a href="https://github.com/chrismckelt" className="zocial github">GitHub</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
