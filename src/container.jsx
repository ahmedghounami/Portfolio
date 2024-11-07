export default function Container({ children }) {
  return (
    <div className="flex flex-col h-[100vh] bg-[white] ml-40 mr-40">
      {children}
    </div>
  );
}