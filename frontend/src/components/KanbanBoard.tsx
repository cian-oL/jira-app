import { kanbanColumns } from "@/config/kanbanColumnsConfig";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
  return (
    <div className="flex justify-around items-center container px-2 gap-4 bg-indigo-100">
      {kanbanColumns.map((column) => (
        <ColumnContainer key={column.columnId} column={column} />
      ))}
    </div>
  );
};

export default KanbanBoard;
