export default function Container({ children }) {
  return (
    <div className="flex flex-col ml-40 mr-40 mt-14">
      {children}
    </div>
  );
}