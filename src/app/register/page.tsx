"use client";
import React, { useState } from "react";
import { Label } from "@/componets/ui/label";
import { Input } from "@/componets/ui/input";
import { cn } from "@/utils/utils";
import firebaseAppConfig from "../../lib/firebase-config";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const auth = getAuth(firebaseAppConfig);

interface FormValue {
  fullName: string;
  email: string;
  password: string;
}

function RegisterForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  const [formValue, setFormValue] = useState<FormValue>({
    fullName: "",
    email: "",
    password: "",
  });

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoader(true);
      const userCredential = await createUserWithEmailAndPassword(auth, formValue.email, formValue.password);

      // Update user's full name in Firebase Auth
      await updateProfile(userCredential.user, {
        displayName: formValue.fullName,
      });

      router.push("/"); // Redirect to homepage or dashboard
    } catch (err: any) {
      setError("Registration failed.");
    } finally {
      setLoader(false);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md mt-28 rounded-xl bg-black p-6 md:p-8 shadow-lg border border-white/10">
        <h2 className="text-2xl font-bold text-white text-center">Register</h2>

        <form className="mt-8 space-y-6" onSubmit={register}>

          <LabelInputContainer>
            <Label htmlFor="fullName" className="text-white">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Tyler Durden"
              className="text-white bg-zinc-800 border-zinc-700"
              onChange={handleOnChange}
              value={formValue.fullName}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="projectmayhem@fc.com"
              className="text-white bg-zinc-800 border-zinc-700"
              onChange={handleOnChange}
              value={formValue.email}
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="text-white bg-zinc-800 border-zinc-700"
              onChange={handleOnChange}
              value={formValue.password}
              required
            />
          </LabelInputContainer>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loader}
            className="group/btn relative w-full rounded-md bg-gradient-to-br bg-white px-6 py-3 font-medium text-black shadow-md transition duration-300 hover:opacity-90"
          >
            {loader ? "Registering..." : "Register →"}
            <BottomGradient />
          </button>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-500 to-transparent my-6" />
          <div className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 font-semibold">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

// Gradient below button
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

// Label + Input container
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
);
