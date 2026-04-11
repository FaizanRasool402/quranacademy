"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AddBlog from "@/components/AddBlog";
import { isAdminSession } from "@/lib/adminAuth";

export default function CreateBlogPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isAdminSession()) {
      router.replace("/adminlogin");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center text-gray-500 text-sm">
        Loading…
      </div>
    );
  }

  return <AddBlog />;
}
