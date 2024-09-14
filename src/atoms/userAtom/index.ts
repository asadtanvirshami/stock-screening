import { atom } from "jotai";
import Cookies from "js-cookie";

// Initialize user data from cookies or set default values with safe parsing
const userDataCache = Cookies.get("user");

let initialUserData;

try {
  initialUserData = userDataCache ? JSON.parse(userDataCache) : { user: null };
} catch (error) {
  console.error("Error parsing user data from cookies:", error);
  initialUserData = { user: null }; // Set default in case of error
}

// Atom to store user data
export const userAtom = atom(initialUserData);

// Function to update the atom and cookies
export const updateUserAtom = atom(
  null,
  (get, set, newUserData: any) => {
    // Update the atom value
    set(userAtom, newUserData);

    // Update cookies
    Cookies.set("user", JSON.stringify(newUserData));
  }
);
