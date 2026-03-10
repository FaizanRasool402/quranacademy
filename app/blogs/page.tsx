import dynamic from "next/dynamic";

const Blog = dynamic(() => import("@/components/Blog"));

export default function BlogsPage() {
  return <Blog />;
}
