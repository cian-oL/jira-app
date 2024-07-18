import { Column } from "@/types/types";

type Props = {
  column: Column;
};

const ColumnContainer = ({ column }: Props) => {
  return (
    <div className="flex flex-col min-h-screen w-[20%] p-5">
      <div className="bg-indigo-600 text-white font-bold cursor-grab rounded-t-md border-b-2 border-amber-300 p-1 h-16">
        <h2>{column.title}</h2>
      </div>
      <div className="flex flex-1 bg-indigo-300">Content</div>
      <div className="bg-indigo-600 text-white rounded-b-md">Footer</div>
    </div>
  );
};

export default ColumnContainer;
