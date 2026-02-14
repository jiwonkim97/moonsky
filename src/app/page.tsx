import { Suspense } from "react";
import Starfield from "@/components/Starfield";
import PageView from "@/components/PageView";

export default function Home() {
  return (
    <div className="mobile-frame">
      <Starfield />
      <Suspense fallback={null}>
        <PageView />
      </Suspense>
    </div>
  );
}
