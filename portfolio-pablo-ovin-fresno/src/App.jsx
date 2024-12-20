import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <h2>Pablo Ovin Fresno</h2>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="#sobreMi">Sobre mí</a>
            </li>
            <li>
              <a href="#habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#certificaciones">Certificaciones</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sección combinada de "Header" y "Sobre mí" */}
      <section id="sobreMi" className="section">
        <div className="sobreMi-content">
          {/* Parte izquierda: Solo los iconos */}
          <div className="left-side">
            <div className="icons">
              <a
                href="https://github.com/PabOv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a href="mailto:pofresno92@gmail.com">
                <FaEnvelope size={30} />
              </a>
              <a
                href="https://linkedin.com/in/pofresno92"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>

          {/* Parte central: Texto y botones */}
          <div className="center-side">
            <div className="text">
              <h2>¡Hola! Soy Pablo Ovin &lt;/&gt; </h2>
              <p>
                Soy graduado en Desarrollo de Aplicaciones Multiplataforma y en
                Magisterio de Educación Primaria.
              </p>
              <p>
                Soy un entusiasta de la tecnología y el deporte, pasiones que
                intento combinar y conocer al máximo, tanto desde el ámbito
                teórico como práctico.
              </p>
              <div className="buttons">
                <a href="#contacto" className="button">
                  Contacto
                </a>
                <a href="/CVPabloOvinFresno.pdf" className="button" download>
                  Descargar CV
                </a>
              </div>
            </div>
          </div>

          {/* Parte derecha: Foto */}
          <div className="right-side">
            <img src="foto-nature.png" alt="Foto" className="profile-photo" />
          </div>
        </div>
      </section>

      <section id="habilidades" className="section">
        <h2>Habilidades</h2>

        <div className="skills-container">
          {/* Desarrollo frontend */}
          <div className="skills-category">
            <h3>Desarrollo Frontend</h3>
            <div className="skills-list">
              <ul>
                <li>
                  <img src="html.png" alt="HTML" />
                  <span>HTML</span>
                </li>
                <li>
                  <img src="css.webp" alt="CSS" />
                  <span>CSS</span>
                </li>
                <li>
                  <img src="js.webp" alt="JavaScript" />
                  <span>JavaScript</span>
                </li>
                <li>
                  <img src="angular.webp" alt="Angular" />
                  <span>Angular</span>
                </li>
                <li>
                  <img src="android.png" alt="Android" />
                  <span>Android</span>
                </li>
                <li>
                  <img src="bootstrap.png" alt="Bootstrap" />
                  <span>Bootstrap</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Barra vertical */}
          <div className="vertical-bar"></div>

          {/* Desarrollo backend */}
          <div className="skills-category">
            <h3>Desarrollo Backend</h3>
            <div className="skills-list">
              <ul>
                <li>
                  <img src="java.png" alt="Java" />
                  <span>Java</span>
                </li>
                <li>
                  <img src="c.png" alt="C#" />
                  <span>C#</span>
                </li>
                <li>
                  <img src="spring.png" alt="Spring" />
                  <span>Spring</span>
                </li>
                <li>
                  <img src="plsql.webp" alt="PLSQL" />
                  <span>PL/SQL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Proyectos */}
      <section id="proyectos" className="section">
        <h2>Proyectos</h2>
        <div className="project-grid">
          {/* Card 1: Proyecto desplegado */}
          <div className="project-card">
            <img
              src="proyectos/pincar.jpg"
              alt="Pincar"
              className="project-img"
            />
            <h3 className="project-title">Pincar</h3>
            <p className="project-description">Web Compraventa de Coches</p>
            <div className="project-buttons">
              <a
                href=""
                className="button project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={20} /> Ir al sitio
              </a>
            </div>
          </div>

          {/* Card 2: Proyecto no desplegado */}
          <div className="project-card">
            <img
              src="proyectos/livepulse.png"
              alt="Live Pulse"
              className="project-img"
            />
            <h3 className="project-title">Live Pulse</h3>
            <p className="project-description">
              Web Conciertos y Festivales / Proyecto Integrado (DAM)
            </p>
            <div className="project-buttons">
              <a
                href="/proyectos/DocumentacionLivePulsePabloOvinFresno.pdf"
                className="button project-pdf"
                download
              >
                <FaDownload size={20} /> Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Certificaciones */}
      <section id="certificaciones" className="certificaciones">
        <h2>Certificaciones</h2>
        <div className="certificado-cards">
          {/* Card 1 */}
          <div className="certificado-card">
            <img
              src="certificados/mongodb.jpg"
              alt="MongoDB Java Developer Path"
              className="certificado-img"
            />
            <h3 className="certificado-title">MongoDB Java Developer Path</h3>
            <p className="certificado-institucion">MongoDB</p>
            <button
              className="ver-certificado-btn"
              onClick={() => window.open("certificados/mongodb.pdf", "_blank")}
            >
              <FaSearch size={20} />
            </button>
          </div>

          {/* Card 2 */}
          <div className="certificado-card">
            <img
              src="certificados/introdocker.jpg"
              alt="Curso de Introducción a Docker"
              className="certificado-img"
            />
            <h3 className="certificado-title">
              Curso de Introducción a Docker
            </h3>
            <p className="certificado-institucion">OpenWebinars</p>
            <button
              className="ver-certificado-btn"
              onClick={() =>
                window.open("certificados/introdocker.pdf", "_blank")
              }
            >
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <footer id="contacto" className="footer">
        <h2>Contacto</h2>
        <div className="contact-buttons">
          {/* Botón Correo */}
          <div
            className="contact-button"
            onClick={() =>
              (window.location.href = "mailto:pofresno92@gmail.com")
            }
          >
            <FaEnvelope size={30} />
            <span className="button-title">Correo</span>
            <span className="button-details">pofresno92@gmail.com</span>
          </div>

          {/* Botón LinkedIn */}
          <div
            className="contact-button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/pofresno92/", "_blank")
            }
          >
            <FaLinkedin size={30} />
            <span className="button-title">LinkedIn</span>
            <span className="button-details">Perfil de Pablo</span>
          </div>

          {/* Botón Ubicación */}
          <div
            className="contact-button"
            onClick={() =>
              window.open(
                "https://www.google.com/maps?q=43.361945,-5.503793",
                "_blank"
              )
            }
          >
            <FaMapMarkerAlt size={30} />
            <span className="button-title">Ubicación</span>
            <span className="button-details">España</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
