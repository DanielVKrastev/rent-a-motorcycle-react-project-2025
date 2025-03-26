import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useEditUser, useUser } from "../../api/userApi";
import { Link } from "react-router";

export default function UserSettings() {
  const { _id: userId } = useContext(UserContext);
  const { user, isLoading } = useUser(userId);
  const { edit } = useEditUser();
  const { userLoginHandler } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');

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
      // TODO: Display message
      console.log('Edit success');

    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <section
        className="bg-gray-500 bg-blend-multiply dark:bg-gray-500 bg-cover bg-[url('/images/bg-road.jpg')] bg-center bg-fixed bg-no-repeat md:h-[calc(90vh-50px)] flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center px-1 py-8 mx-auto lg:py-0 mb-20 ">
          <div className="w-[95vw] bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow sm:max-w-md xl:p-0 mt-2 mb-16">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                User Settings
              </h1>
              
              <form action={editActionHandle}>
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-full">
                    <h3>You are {role}</h3>
                  </div>
                  <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input id="name" name="username" defaultValue={name} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input id="email" type="email" name="email" defaultValue={email} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="flex justify-between">
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                      Save Changes
                    </button>
                    <Link to='/' type="button" className="px-6 py-2 ml-5 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200">
                      Cancel
                    </Link>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
