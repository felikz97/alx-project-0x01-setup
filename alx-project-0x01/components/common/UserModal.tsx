import React, { useState, useEffect } from 'react';
import { UserData, UserModalProps } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, user, onClose }) => {
  // If a user object is passed, we’ll prefill the form for “edit”; otherwise it’s “add”
  const [formValues, setFormValues] = useState<Omit<UserData, 'id'>>({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: { name: '', catchPhrase: '', bs: '' },
  });

  // Whenever `user` prop changes (e.g. edit mode), populate form
  useEffect(() => {
    if (user) {
      setFormValues({
        name: user.name,
        username: user.username,
        email: user.email,
        address: {
          street: user.address.street,
          suite: user.address.suite,
          city: user.address.city,
          zipcode: user.address.zipcode,
          geo: { lat: user.address.geo.lat, lng: user.address.geo.lng },
        },
        phone: user.phone,
        website: user.website,
        company: {
          name: user.company.name,
          catchPhrase: user.company.catchPhrase,
          bs: user.company.bs,
        },
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof formValues
  ) => {
    setFormValues(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserData['address']
  ) => {
    setFormValues(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: e.target.value,
      },
    }));
  };

  const handleCompanyChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserData['company']
  ) => {
    setFormValues(prev => ({
      ...prev,
      company: {
        ...prev.company,
        [field]: e.target.value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form values and close the modal
    console.log('Submitted user data:', formValues);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            {user ? 'Edit User' : 'Add New User'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Body/Form */}
        <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={formValues.name}
              onChange={e => handleChange(e, 'name')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. Leanne Graham"
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={formValues.username}
              onChange={e => handleChange(e, 'username')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. Bret"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={formValues.email}
              onChange={e => handleChange(e, 'email')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. Sincere@april.biz"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={formValues.phone}
              onChange={e => handleChange(e, 'phone')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. 1-770-736-8031 x56442"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="text"
              value={formValues.website}
              onChange={e => handleChange(e, 'website')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. hildegard.org"
            />
          </div>

          {/* Address: Street */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Street
            </label>
            <input
              type="text"
              value={formValues.address.street}
              onChange={e => handleAddressChange(e, 'street')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. Kulas Light"
            />
          </div>

          {/* Address: City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              value={formValues.address.city}
              onChange={e => handleAddressChange(e, 'city')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. Gwenborough"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              value={formValues.company.name}
              onChange={e => handleCompanyChange(e, 'name')}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g. Romaguera-Crona"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {user ? 'Save Changes' : 'Add User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
