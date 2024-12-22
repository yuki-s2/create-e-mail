import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const Input = () => {
  return (
    <Layout>
      <div className="ttl">パーツを作成するページ</div>
      <Link to="/Assembly">
        <div className="btn">組み立てるページへ</div>
      </Link>
    </Layout>
  );
};

export default Input;
