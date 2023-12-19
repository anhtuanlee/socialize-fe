import { ReactNode } from "react";

export default function Container({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <div className={` bg-white w-full h-[100vh] ${classname}`}>{children}</div>
  );
}
