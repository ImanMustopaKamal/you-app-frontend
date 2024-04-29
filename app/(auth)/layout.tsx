export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100%-10%)] w-full">
      {children}
    </div>
  );
};