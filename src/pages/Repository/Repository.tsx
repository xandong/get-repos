import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ButtonClick } from "../../components/button-click/ButtonClick";
import { Header } from "../../components/header/Header";

export function Repository() {
  const [repositories, setRepositories] = useState(Array);
  const navigate = useNavigate();
  const userGithub = localStorage.getItem("userGithub");

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");

    repositoriesName = JSON.parse(repositoriesName as string);
    setRepositories(repositoriesName as unknown as Array<string>);
  }, []);

  function newConsult() {
    localStorage.clear();
    return navigate("/");
  }

  return (
    <>
      <Header />
      <main className="py-20 flex flex-col items-center justify-center">
        <Link to="/" className="my-2 mb-8" onClick={newConsult}>
          <ButtonClick type="button" title="Buscar outro" />
        </Link>

        {repositories.map((repo) => {
          return (
            <a
              href={`https://github.com/${userGithub}/${repo}`}
              target="_blank"
              rel="noreferrer"
            >
              <p className="bg-zinc-800 text-zinc-50 w-96 p-2 rounded my-2">
                {repo as string}
              </p>
            </a>
          );
        })}
      </main>
    </>
  );
}
