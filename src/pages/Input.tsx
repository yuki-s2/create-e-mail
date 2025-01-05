import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useParts } from "../pages/PartsContext";
import { useState } from "react";

const Input = () => {
  const [newPartName, setNewPartName] = useState("");
  
  const { addPart } = useParts();

  const handleAddPart = () => {
    const newPart = `パーツ${newPartName}`;
    if (!newPartName.trim()) {
      console.log("パーツ名を入力してください！");
      return;
    }
    addPart(newPart);
    setNewPartName(""); // 入力欄をクリア
    console.log(`パーツ "${newPart}" を追加しました！`);
  };

  return (
    <Layout>
      <div className="ttl">パーツを作成するページ</div>
      <input
            className="input"
            type="text"
            onChange={(e) => setNewPartName(e.target.value)}
            value={newPartName}
          />
      <button className="btn" onClick={handleAddPart}>
        パーツを追加
      </button>
      <Link to="/Assembly">
        <div className="btn">組み立てるページへ</div>
      </Link>
    </Layout>
  );
};

export default Input;
