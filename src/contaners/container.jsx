export default function Container({ children }) {
  return (
    <div className="flex flex-col ml-40 mr-40 top-[6rem] relative gap-[3rem] ">
      {children}
    </div>
  );
}