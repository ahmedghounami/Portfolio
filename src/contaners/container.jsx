export default function Container({ children }) {
  return (
    <div className="flex flex-col top-[6rem] relative gap-[3rem] ">
      {children}
    </div>
  );
}