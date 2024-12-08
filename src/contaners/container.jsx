
import '../global.css'

export default function Container({ children }) {
  return (
    <div className="flex flex-col top-[6rem] relative gap-[3rem] w-full sm:w-full md:max-w-[60rem]">
      {children}
    </div>
  );
}
