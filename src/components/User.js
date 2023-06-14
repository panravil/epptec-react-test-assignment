import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const User = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((user) => user.id == userId);
  const navigate = useNavigate();

  const redirectToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <div className="px-72 py-1">
      {user ? (
        <div className="border-2 m-auto min-h-screen">
          <div className="pt-3">
            <button onClick={redirectToPreviousPage} className="px-12">
              <u>
                <i>Back</i>
              </u>
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={process.env.PUBLIC_URL + `/img/user_avatar.png`}
              alt="User Avatar"
              width="100px"
              height="100px"
            />
          </div>
          <h1 className="text-2xl text-center px-4 py-6">
            <b>User Information</b>
          </h1>
          <div className="px-12 py-2">
            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="flex gap-5">
                <p className="text-1xl">
                  <b>name:</b>
                </p>
                <p>{user.name}</p>
              </div>
              <div className="flex gap-5">
                <p className="text-1xl">
                  <b> username:</b>
                </p>
                <p>{user.username}</p>
              </div>
              <div className="flex gap-5">
                <p className="text-1xl">
                  <b>email:</b>{" "}
                </p>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </div>
            </div>
            <p className="text-1xl pt-3">
              <b> address:</b>
            </p>
            <div className="grid grid-cols-2 gap-4 px-2">
              <div className="flex gap-5">
                <p className="text-sm">
                  <b>street:</b>
                </p>
                <p className="text-sm">{user.address.street}</p>
              </div>
              <div className="flex gap-5">
                <p className="text-sm">
                  <b>suite:</b>
                </p>
                <p className="text-sm">{user.address.suite}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-2">
              <div className="flex gap-5">
                <p className="text-sm">
                  <b> city:</b>
                </p>
                <p className="text-sm">{user.address.city}</p>
              </div>
              <div className="flex gap-5">
                <p className="text-sm">
                  <b>zipcode:</b>
                </p>
                <p className="text-sm">{user.address.zipcode}</p>
              </div>
            </div>
            <p className="text-sm px-2">
              <b> geo:</b>
            </p>
            <div className="px-4">
              <div className="flex gap-5">
                <p className="text-sm">
                  <b> lat:</b>
                </p>
                <p className="text-sm">{user.address.geo.lat}</p>
              </div>
              <div className="flex gap-5">
                <p className="text-sm">
                  <b>lng:</b>
                </p>
                <p className="text-sm">{user.address.geo.lng}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-3">
              <div className="flex gap-5">
                <p className="text-1xl">
                  <b>phone:</b>
                </p>
                <a href={`tel:${user.phone}`}>{user.phone}</a>
              </div>
              <div className="flex gap-5">
                <p className="text-1xl">
                  <b>website:</b>
                </p>
                <a href={`https://${user.website}`}>{user.website}</a>
              </div>
            </div>
            <p className="text-1xl pt-3">
              <b>company:</b>
            </p>
            <div className="px-2">
              <div className="flex gap-5">
                <p className="text-sm">
                  <b>name:</b>
                </p>
                <p className="text-sm">{user.company.name}</p>
              </div>
              <div className="flex gap-5">
                <p className="text-sm">
                  <b>bs:</b>
                </p>
                <p className="text-sm">{user.company.bs}</p>
              </div>
              <div className="flex gap-5">
                <p className="text-sm">
                  <b>catchPhrase:</b>
                </p>
                <p className="text-sm">{user.company.catchPhrase}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default User;
