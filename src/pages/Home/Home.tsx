import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonClick } from "../../components/button-click/ButtonClick";
import { Header } from "../../components/header/Header";

export function Home() {
  const [userInput, setUserInput] = useState("");
  const [erroGetRepositories, setErroGetRepositories] = useState(false);
  const navigate = useNavigate();

  async function handleInputUser() {
    await axios
      .get(`https://api.github.com/users/${userInput}/repos`)
      .then((e) => {
        const repositories = e.data;
        const repositoriesName: string[] = [];
        repositories.map((repo: any) => {
          return repositoriesName.push(repo.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        localStorage.setItem("userGithub", userInput);
        setErroGetRepositories(false);
        console.log(typeof e.data);
        console.log(e.data);
        e.data.length === 0 ? setErroGetRepositories(true) : navigate("/repos");
      })
      .catch((err) => setErroGetRepositories(true));
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    handleInputUser();
  }

  return (
    <>
      <Header />
      <main className="py-20 flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          autoComplete="on"
          className="w-fit relative"
        >
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Usuário"
            type="text"
            required
            className="w-80 px-4 py-2 rounded-l shadow-lg shadow-slate-200"
          ></input>
          <ButtonClick type="submit" title="Buscar" />
        </form>
        {erroGetRepositories ? (
          <p className="bg-red-100 text-red-500 px-4 py-1 my-8 font-semibold rounded border-red-300 border-2">
            Ocorreu um erro, tente novamente.
          </p>
        ) : (
          ""
        )}
      </main>
    </>
  );
}
