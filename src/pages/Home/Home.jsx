import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container } from "./home.styles";
import axios from "../../config/axios.config";
import Card from "../../components/Card/Card";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limit] = useState(100);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setPage(1);
  }, [searchInput]);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios.get(
          `/api/hero?name=${searchInput}&limit=${limit}&skip=${offset}`
        );
        setData(response.data.results);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDatas();
  }, [searchInput, limit, offset, page]);

  return (
    <Container>
      <SearchBar setSearchInput={setSearchInput} />
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </ul>
      )}
      <div className="page">
        <button
          disabled={offset === 0}
          onClick={() => {
            scrollToTop();
            setOffset(offset - limit);
            setPage(page - 1);
          }}
        >
          {"<"}
        </button>
        <p>{page}</p>
        <button
          disabled={offset + limit >= count}
          onClick={() => {
            scrollToTop();
            setOffset(offset + limit);
            setPage(page + 1);
          }}
        >
          {">"}
        </button>
      </div>
    </Container>
  );
}
