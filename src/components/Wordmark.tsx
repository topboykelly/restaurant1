type WordmarkProps = {
  size?: "nav" | "footer";
};

export function Wordmark({ size = "nav" }: WordmarkProps) {
  const heightClass = size === "nav" ? "h-10 md:h-12" : "h-9";

  return (
    <img
      src="/logo.png"
      alt="BaguetteSub Restaurant"
      className={`${heightClass} w-auto object-contain object-left`}
    />
  );
}
