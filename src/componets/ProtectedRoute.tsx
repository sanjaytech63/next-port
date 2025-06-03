"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace("/login");
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return (
            <div className="bg-gray-100 h-full fixed top-0 left-0 w-full flex justify-center items-center">
                <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-gray-100"></span>
                </span>
            </div>
        );
    }

    return <>{children}</>;
}
