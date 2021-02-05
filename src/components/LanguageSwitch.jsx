import "../stylesheets/languageSwitch.scss";

const LanguageSwitch = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    language === "spanish" ? setLanguage("english") : setLanguage("spanish");
  };

  return (
    <div className="languageSwitch">
      <label class="switch">
        <input type="checkbox" onChange={toggleLanguage}></input>
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default LanguageSwitch;
