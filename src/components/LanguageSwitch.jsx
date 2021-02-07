import "../stylesheets/languageSwitch.scss";

const LanguageSwitch = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    language === "es" || language === "es-ES"
      ? setLanguage("en")
      : setLanguage("es");
  };

  return (
    <div className="languageSwitch">
      <label className="switch">
        <input type="checkbox" onChange={toggleLanguage}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default LanguageSwitch;
