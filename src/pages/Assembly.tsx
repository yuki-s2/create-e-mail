import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useParts } from "../pages/PartsContext";

const ItemType = {
  PART: "part",
};

const Assembly = () => {
const [droppedParts, setDroppedParts] = useState<string[]>([]);

  const handleDrop = (item: { name: string }) => {
    setDroppedParts((prev: string[]) => [...prev, item.name]);
  };

  // ドラッグ可能なアイテム（li）
const Part = ({ name }: { name: string }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
      type: ItemType.PART,//一意のID
      item: { name },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));
  
    return (
      <li
        ref={dragRef}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "grab",
        }}
      >
        {name}
      </li>
    );
  };

  
  // ドラッグ元のリスト
const PartsList = () => {
  //Input.tsxから追加されたパーツ
  const { parts } = useParts();

  return (
    <div className="assembly_parts">
      <ul>
        {parts.map((part, index) => (
          <Part key={index} name={part} />
        ))}
      </ul>
    </div>
  );
};


// ドロップターゲット
// void → 戻り値のない関数
const DropBox = ({ droppedParts, onDrop }: { droppedParts: string[]; onDrop: (item: {name: string}) => void; }) => {
    const [, dropRef] = useDrop(() => ({
      accept: ItemType.PART,
      drop: (item: {name: string} ) => onDrop(item),
    }));
  
    return (
      <div ref={dropRef} className="assembly_box">
        {droppedParts.length === 0 ? (
          <div className="assembly_boxText">ここにD&Dしてメールを作成</div>
        ) : (
          <ul>
            {droppedParts.map((part, index) => (
              <li key={index}>{part}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <Layout>
    <DndProvider backend={HTML5Backend}>
      <div className="ttl">パーツを組み立ててメールを作成するページ</div>
      <div className="assembly_container">
        {/* ドロップターゲット */}
        <DropBox droppedParts={droppedParts} onDrop={handleDrop} />
        {/* ドラッグ元 */}
        <PartsList />
      </div>
      <Link to="/">
        <div className="btn">パーツを作るページへ</div>
      </Link>
    </DndProvider>
    </Layout>
  );
};

export default Assembly;