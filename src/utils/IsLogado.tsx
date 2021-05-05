import { useRouter } from "next/router";
import { useEffect } from "react";

export default function IsLogado(name: string) {
  const router = useRouter();

  useEffect(() => {
    if (name === "undefined") {
      router.push("/");
    }
  }, [router, name]);
}
