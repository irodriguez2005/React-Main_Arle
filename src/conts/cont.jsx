import { createContext, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import "./contexto.css";

function randomCase(string) {
  return string
    .split("")
    .map((c) => (Math.random() <= 0.5 ? c.toUpperCase() : c.toLowerCase()))
    .join("");
}

// Creamos un nuevo "context" con "createContext"
// Esta funcion retorna un objeto con dos propiedades: { Provider, Consumer }
// Por convencion, usamos el nombre "User" + "Context" porque queremos
// pasar como valor datos relacionados al usuario.
// Además, usamos mayúscula porque más adelante lo utilizaremos como componente
// y los componentes deben ser con mayúscula
const UserContext = createContext();

function Header() {
  const { user } = useContext(UserContext);
  return <div className="Header">Sesión iniciada como @{user.username}</div>;
}

// Lo mismo que con el componente "Header".
function Sidebar() {
  const { user, updateUsername } = useContext(UserContext);
  return (
    <div className="Sidebar">
      <img alt="Profile" src={user.avatarUrl} />
      <h2>{user.name}</h2>
      <h1>{user.username}</h1>
      <div>
        Seguidores: {user.followers}, Seguidos: {user.following}, Estrellas:{" "}
        {user.stars}
      </div>
      <Button onClick={() => updateUsername(randomCase(user.username))}>
        Randomizar
      </Button>
    </div>
  );
}

function Content() {
    const { user } = useContext(UserContext);
  return (
    <div className="Content">
      <h2>Proyectos elaborados por {user.username}</h2>
    </div>
  );
}

function UserProvider({ children }) {
  const [user, setUser] = useState({
    username: "Josefina",
    name: "Maria Jose Diaz",
    bio: "Full Stack Developer",
    avatarUrl: "https://res.cloudinary.com/dbomtbw1i/image/upload/c_fill,g_face,w_300,h_300,r_max/cld-sample.jpg",
    following: 100,
    followers: 100,
    stars: 10
  });

  const updateUsername = (newUsername) => {
    setUser((currentUser) => ({
      ...currentUser,
      username: newUsername
    }));
  };
  return (
    <UserContext.Provider value={{ user, updateUsername }}>
      {children}
    </UserContext.Provider>
  );
}
export default function Contexto() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <div className="Body">
          <Sidebar />
          <Content />
        </div>
      </UserProvider>
    </div>
  );
}
