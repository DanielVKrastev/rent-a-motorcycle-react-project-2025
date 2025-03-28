import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useEditUser, useUser } from "../../../api/userApi";
import { Link } from "react-router";
import MessageToast from "../../messageToast/MessageToast";
import ErrorAlert from "../../errorAlert/ErrorAlert";
import LoadingSpinner from "../../loading-spinner/LoadingSpinner";

export default function UserSettings() {
  const { _id: userId } = useContext(UserContext);
  const { user, isLoading } = useUser(userId);
  const { edit } = useEditUser();
  const { userLoginHandler } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [licenseCategory, setLicenseCategory] = useState('');
  const [birthday, setBirthday] = useState('');
  const [role, setRole] = useState('User');
  const [showMessageToast, setMessageShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setName(user.username);
      setEmail(user.email)
      setRole(user.role);
    }
  }, [user, isLoading])

  const editActionHandle = async (formData) => {
    const { username, email } = Object.fromEntries(formData);
    try {

      const editUser = await edit(userId, { email, username });

      userLoginHandler(editUser);
      setName(editUser.username);
      setEmail(editUser.email);
      setTelephone(editUser.telephone);
      setLicenseCategory(editUser.licenseCategory);
      setBirthday(editUser.birthday);

      setMessageShowToast({ type: 'success', content: 'Edit success!' });
      setErrorMessage(false);
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  return (
    <>

      {showMessageToast && <MessageToast message={showMessageToast} onClose={setMessageShowToast} />}

      {isLoading ? <LoadingSpinner /> :
        <>
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">
            User Settings
          </h1>
          <h3 className="ml-10">{name} you are: {role}</h3>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-10">
            <form action={editActionHandle} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input id="name" name="username" defaultValue={name}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input id="email" type="email" name="email" defaultValue={email}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="licenseCategory" className="block text-sm font-medium text-gray-700 mb-1">
                    License Category
                  </label>
                  <input id="licenseCategory" type="text" name="licenseCategory" defaultValue={licenseCategory}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telephone
                  </label>
                  <input id="telephone" type="tel" name="telephone" defaultValue={telephone}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div>
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700 mb-1">
                  Birthday
                </label>
                <input id="birthday" type="date" name="birthday" defaultValue={birthday}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              {errorMessage && <ErrorAlert error={errorMessage} />}

<br /><br />
              <div className="flex justify-center gap-4">
                <button type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                  Save Changes
                </button>
              </div>
            </form>
          </div>


        </>
      }

    </>
  );
}
