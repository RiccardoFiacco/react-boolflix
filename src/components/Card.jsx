import { flagImage, imagePath } from "../util.jsx";
import { getStar } from "../util.jsx";

export function Card({ obj = {} }) {

  const { title, original_title, original_language, vote_average } = obj; //destructuring 

  let language = flagImage(original_language);

  let star = getStar(vote_average);
  let finalimag = imagePath + obj.poster_path;

  return (
    <div>
      {/* Card Content */}
      <div
        style={{ backgroundImage: `url(${finalimag})` }}
        className="myCard"
      ></div>
      {/* Card Hover */}
      <div>
        <div className="hidden">
          <h3>{title}</h3>
          {/* </div><img src={imagePath+obj.poster_path} alt="" /> */}
          <ol>
            <li>original name: {original_title}</li>
            <li>
              language:{" "}
              {language ? (
                <img src={language} height="25px" alt="" /> /*cambiare l'altezza*/
              ) : (
                original_language
              )}
            </li>
            <li>avarage vote: {star}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
