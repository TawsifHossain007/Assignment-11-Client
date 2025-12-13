import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAuth/useAxiosSecure";
import { FaUserPlus, FaUserSlash } from "react-icons/fa";
import { MdOutlineBlock } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import Swal from "sweetalert2";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["user-management"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/${user._id}/role`, { role: "admin" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.displayName} marked as an admin.`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  const handleRemoveAdmin = (user) => {
    axiosSecure
      .patch(`/users/${user._id}/role`, { role: "user" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.displayName} removed from admin.`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  const handleBlockUser = (user) => {
    swalWithBootstrapButtons
      .fire({
        title: `Block ${user.displayName}?`,
        text: "User will not be able to access the website.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, block user!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/users/${user._id}/status`, { status: "Blocked" })
            .then((res) => {
              if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${user.displayName} has been blocked.`,
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "User was not blocked.",
            icon: "error",
          });
        }
      });
  };

  const handleUnblockUser = (user) => {
    swalWithBootstrapButtons
      .fire({
        title: `Unblock ${user.displayName}?`,
        text: "User will regain access to the website.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, unblock user!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosSecure
            .patch(`/users/${user._id}/status`, { status: "Regular" })
            .then((res) => {
              if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${user.displayName} has been unblocked.`,
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "User remains blocked.",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="font-bold text-4xl">User Management</h1>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.displayName}</td>
                <td>{user?.role}</td>
                <td>{user?.status}</td>

                <td className="flex items-center gap-2">
                  {user.status === "Blocked" && (
                    <div className="tooltip" data-tip="Unblock User">
                      <button
                        onClick={() => handleUnblockUser(user)}
                        className="btn btn-primary text-black"
                      >
                        <CgUnblock />
                      </button>
                    </div>
                  )}

                  {user.role === "user" && user.status !== "Blocked" && (
                    <>
                      <div className="tooltip" data-tip="Make Admin">
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-primary text-black"
                        >
                          <FaUserPlus />
                        </button>
                      </div>

                      <div className="tooltip" data-tip="Block User">
                        <button
                          onClick={() => handleBlockUser(user)}
                          className="btn btn-primary text-black"
                        >
                          <MdOutlineBlock />
                        </button>
                      </div>
                    </>
                  )}

                  {user.role === "admin" && (
                    <div className="tooltip" data-tip="Remove Admin">
                      <button
                        onClick={() => handleRemoveAdmin(user)}
                        className="btn btn-primary text-black"
                      >
                        <FaUserSlash />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
