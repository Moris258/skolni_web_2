import type { Session } from "./types";

const isAdmin = ({ session }: { session?: Session }) => !!session?.data.admin;

const isUserOrAdmin = ({ session }: { session?: Session }) => {
  if (isAdmin({ session })) return true;

  return {
    id: {
      equals: session?.itemId,
    },
  };
};

const isAuthorOrAdmin = ({ session }: { session?: Session }) => {
  if (isAdmin({ session })) return true;

  return {
    author: {
      id: {
        equals: session?.itemId,
      },
    },
  };
};

export default { isAdmin, isUserOrAdmin, isAuthorOrAdmin };
