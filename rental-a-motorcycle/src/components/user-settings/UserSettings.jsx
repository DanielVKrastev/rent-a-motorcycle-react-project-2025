import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useUser } from "../../api/userApi";

export default function UserSettings() {
  const {_id: userId} = useContext(UserContext);
  const { user, isLoading } = useUser(userId);
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');
  const [image, setImage] = useState("/default-avatar.png");

  useEffect(() => {
    if(! isLoading) {
      setName(user.username);
      setEmail(user.email)
      setRole(user.role);
    }
  }, [user, isLoading])

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSave = () => {
    console.log("Saving user settings:", { name, email, image });
  };

  return (
    <div className="m-10 max-w-lg mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">User Settings</h2>
      <div className="flex flex-col items-center space-y-6">
        <img src={image} alt="Profile" className="w-28 h-28 rounded-full shadow-md border border-gray-300" />
        <label htmlFor="fileInput" className="cursor-pointer text-blue-600 hover:underline">Change Profile Picture</label>
        <input id="fileInput" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        <div className="w-full">
          <h3>You are {role}</h3>
        </div>
        <div className="w-full">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input id="name" defaultValue={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">Save Changes</button>
      </div>
    </div>
  );
}
