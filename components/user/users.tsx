import { fetchUsers } from "../../utils/fetcher";

const Users = async () => {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Get Users!</h1>
      <div>
        {users.map((user) => {
          return (
            <p key={user.id}>
              {user.id}: {user.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
