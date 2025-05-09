"use client";
import React from "react";
import { Label } from "@/componets/ui/label";
import { Input } from "@/componets/ui/input";
import { cn } from "@/utils/utils";
import { IconBrandGoogle } from "@tabler/icons-react";

function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md mt-28 rounded-xl bg-black p-6 md:p-8 shadow-lg border border-white/10">
        <h2 className="text-2xl font-bold text-white text-center">Welcome to Sanjay Tech</h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <LabelInputContainer>
              <Label htmlFor="firstname" className="text-white">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" className="text-white bg-zinc-800 border-zinc-700" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname" className="text-white">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" className="text-white bg-zinc-800 border-zinc-700" />
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" className="text-white bg-zinc-800 border-zinc-700" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" className="text-white bg-zinc-800 border-zinc-700" />
          </LabelInputContainer>

          <button
            type="submit"
            className="group/btn relative w-full rounded-md bg-gradient-to-br bg-white px-6 py-3 font-medium text-black shadow-md transition duration-300 hover:opacity-90"
          >
            Sign Up &rarr;
            <BottomGradient />
          </button>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent my-6" />

          {/* Centered Google Login */}
          <div className="flex justify-center">
            <button
              type="button"
              className="group/btn flex items-center space-x-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black hover:bg-gray-100 transition"
            >
              <IconBrandGoogle className="h-5 w-5" />
              <span>Continue with Google</span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupFormDemo;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
