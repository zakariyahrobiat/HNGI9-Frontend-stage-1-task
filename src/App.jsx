import profile from "./assets/images/profile.png";
import { links } from "./assets/data";
import slack from "./assets/images/slack.png";
import git from "./assets/images/git.png";
import zuri from "./assets/images/zuri.png";
import logo from "./assets/images/logo.png";
const App = () => {
  return (
    <div className="flex justify-center items-center  py-10 text-center mx-5 lg:mx-28 ">
      <div className="w-screen ">
        <div className="flex justify-center ">
          <img src={profile} alt="" srcset="" />
        </div>
        <h2
          id="twitter"
          className="text-lg font-bold py-5 font-text lg:text-xl text-center"
        >
          Zakariyah Robiah
        </h2>

        <h2 id="slack" className="hidden">
          Robiat Zakariyah
        </h2>

        {links.map((data) => {
          const { name, link, id } = data;
          return (
            <div
              key={id}
              className="bg-gray-200 mb-4 py-4  text-sm font-medium text-gray-900 font-text rounded-lg  lg:text-lg lg:font-semibold  lg:py-3 "
            >
              <ul>
                <li>
                  <a href={link}>{name}</a>
                </li>
              </ul>
            </div>
          );
        })}
        <div className="hidden lg:flex justify-center items-center gap-5  mt-5 mb-10 ">
          <img src={slack} alt="" srcset="" />
          <img src={git} alt="" srcset="" />
        </div>
        <div className=" hidden lg:flex justify-between items-center">
          <img src={zuri} alt="" srcset="" />
          <p className="font-normal test-base text-gray-500">
            HNG Internship 9 Frontend Task
          </p>
          <img src={logo} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default App;
